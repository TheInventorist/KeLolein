from django.shortcuts import render
from .models import Persona
#from .forms import PersonaForm

def index(request):
    personas = Persona.objects.all()
    context = {
        'personas':personas
    }
    return render(request, 'index.html', context)









    # if request.method == 'GET':
    #     form = PersonaForm()
    #     context = {
    #         ''
    #     }
