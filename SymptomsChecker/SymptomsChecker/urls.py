"""
URL configuration for SymptomsChecker project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from checker import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name= 'index'),
    path('basic_info/', views.basic_info, name = 'basic_info'),
    path('symptoms/', views.symptoms, name = 'symptoms'),
    path('questions/', views.questions, name = 'questions'),
    path('conditions/', views.conditions, name = 'conditions'),
    path('details/', views.details, name = 'details'),
    path('treatment/', views.treatment, name = 'treatment'),
    path('basic_info/get_basic_info/', views.get_basic_info, name = 'get_basic_info'),
    path('symptoms/get_symptoms/', views.get_symptoms, name = 'get_symptoms'),
    path('questions/get_other_info/', views.get_other_info, name = 'get_other_info'),
]
