from django.shortcuts import render, redirect
from .utils import WebDoctor
from gradio_client import Client

import json

doctor = WebDoctor()

# Create your views here.
def index(request):
    return render(request, 'index.html')


def basic_info(request):
    return render(request, 'basic_info.html')


def symptoms(request):
    return render(request, 'symptoms.html')


def questions(request):
    return render(request, 'questions.html')


def conditions(request, disease, predictions, symptoms):
    context = {
        "disease" : disease,
        "predictions" : predictions,
        "symptoms"  : symptoms
    }
    return render(request, 'conditions.html', context)


def details(request):
    return render(request, 'details.html')


def treatment(request):
    return render(request, 'treatment.html')


def get_basic_info(request):
    if request.method=="POST":
        age = request.POST['age']
        gender= request.POST["gender"]

        with open('db/variables.json', 'r', encoding='utf-8') as file:
            existing_data = json.load(file)

        existing_data["age"] = age
        existing_data["gender"] = gender

        with open('db/variables.json', 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, indent=4, ensure_ascii=False)
    return redirect('symptoms')


def get_symptoms(request):
    if request.method == "POST":
        symptoms = request.POST.getlist('selected_symptoms')
        #symptoms = request.POST['symptoms']

        with open('db/variables.json', 'r', encoding='utf-8') as file:
            existing_data = json.load(file)

        existing_data["symptoms"] = symptoms

        with open('db/variables.json', 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, indent=4, ensure_ascii=False)
          
    return redirect('questions')


def get_other_info(request):
    if request.method == "POST":
        medications = request.POST['medications']
        conditions = request.POST['conditions']
        
        with open('db/variables.json', 'r', encoding='utf-8') as file:
            existing_data = json.load(file)

        existing_data["medications"] = medications
        existing_data["conditions"] = conditions

        with open('db/variables.json', 'w', encoding='utf-8') as file:
            json.dump(existing_data, file, indent=4, ensure_ascii=False)
        
        symptoms = existing_data["symptoms"]
        data, svm, nb, rf = doctor.prep_data()

        predictions = doctor.predictDisease(symptoms, data, svm, nb, rf) 

        disease = predictions["final_prediction"]

        if disease == "AIDS":
            disease = "Dengue"
          
    return redirect('conditions', disease = disease, predictions = predictions, symptoms = symptoms)


    

