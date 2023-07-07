from django.shortcuts import render
import requests

# Create your views here.
def index(request):
    api_url =  "https://api.nhs.uk/conditions"
    return render(request, 'index.html')

def basic_info(request):
    return render(request, 'basic_info.html')

def symptoms(request):
    return render(request, 'symptoms.html')

def questions(request):
    return render(request, 'questions.html')