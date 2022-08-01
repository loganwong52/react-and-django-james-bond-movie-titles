from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)
