from django.urls import path
from checker import views

urlpatterns = [
    path('', views.index, name='index'),
    path('basic_info/', views.basic_info, name = 'basic_info'),
    path('symptoms/', views.symptoms, name = 'symptoms'),
    path('questions/', views.questions, name = 'questions'),
]
