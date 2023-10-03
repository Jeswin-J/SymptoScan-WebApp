import numpy as np
import os
import pandas as pd
from scipy.stats import mode
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix
from statistics import mode
import warnings
warnings.filterwarnings("ignore", category=UserWarning)

class WebDoctor():
    def scoring(estimator, X, y):
        return accuracy_score(y, estimator.predict(X))

    def prep_data(self):
        DATA_PATH = "db/dataset/Training.csv"
        data = pd.read_csv(DATA_PATH).dropna(axis = 1)

        disease_counts = data["prognosis"].value_counts()
        temp_df = pd.DataFrame({
            "Disease": disease_counts.index,
            "Counts": disease_counts.values
        })


        encoder = LabelEncoder()
        data["prognosis"] = encoder.fit_transform(data["prognosis"])


        X = data.iloc[:,:-1]
        y = data.iloc[:, -1]
        X_train, X_test, y_train, y_test =train_test_split(
        X, y, test_size = 0.2, random_state = 24)

        models = {
            "SVC":SVC(),
            "Gaussian NB":GaussianNB(),
            "Random Forest":RandomForestClassifier(random_state=18)
        }


        svm_model = SVC()
        svm_model.fit(X_train, y_train)
        preds = svm_model.predict(X_test)

    # Training and testing Naive Bayes Classifier
        nb_model = GaussianNB()
        nb_model.fit(X_train, y_train)
        preds = nb_model.predict(X_test)


    # Training and testing Random Forest Classifier
        rf_model = RandomForestClassifier(random_state=18)
        rf_model.fit(X_train, y_train)
        preds = rf_model.predict(X_test)



        final_svm_model = SVC()
        final_nb_model = GaussianNB()
        final_rf_model = RandomForestClassifier(random_state=18)
        final_svm_model.fit(X, y)
        final_nb_model.fit(X, y)
        final_rf_model.fit(X, y)

    # Reading the test data
        test_data = pd.read_csv("db/dataset/Testing.csv").dropna(axis=1)

        test_X = test_data.iloc[:, :-1]
        test_Y = encoder.transform(test_data.iloc[:, -1])

    # Making prediction by take mode of predictions
    # made by all the classifiers
        svm_preds = final_svm_model.predict(test_X)
        nb_preds = final_nb_model.predict(test_X)
        rf_preds = final_rf_model.predict(test_X)
        
        all_predictions = [svm_preds, nb_preds, rf_preds]
        final_preds = []

        # Iterate over the predictions for each input data point
        for i in range(len(svm_preds)):    
            current_predictions = [model_preds[i] for model_preds in all_predictions]
            mode_prediction = mode(current_predictions)
            final_preds.append(mode_prediction)




        symptoms = X.columns.values

    # Creating a symptom index dictionary to encode the
    # input symptoms into numerical form
        symptom_index = {}
        for index, value in enumerate(symptoms):
            symptom = " ".join([i.capitalize() for i in value.split("_")])
            symptom_index[symptom] = index

        data_dict = {
            "symptom_index":symptom_index,
            "predictions_classes":encoder.classes_
        }

        return data_dict, final_svm_model, final_nb_model, final_rf_model


    def predictDisease(self, symptoms, data_dict, final_svm_model, final_nb_model, final_rf_model):
        symptoms = symptoms.split(",")
        
        # creating input data for the models
        input_data = [0] * len(data_dict["symptom_index"])
        for symptom in symptoms:
            index = data_dict["symptom_index"][symptom]
            input_data[index] = 1
            
        # reshaping the input data and converting it
        # into suitable format for model predictions
        input_data = np.array(input_data).reshape(1,-1)
        
        # generating individual outputs
        rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
        nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(input_data)[0]]
        svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(input_data)[0]]
        
        # making final prediction by taking mode of all predictions
        final_prediction = mode([rf_prediction, nb_prediction, svm_prediction])
        predictions = {
            "rf_model_prediction": rf_prediction,
            "naive_bayes_prediction": nb_prediction,
            "svm_model_prediction": svm_prediction,
            "final_prediction":final_prediction
        }
        return predictions