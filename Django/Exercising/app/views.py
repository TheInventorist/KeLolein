from multiprocessing import context
from django.shortcuts import redirect, render
from app.forms import PersonaForm
from app.models import Persona

def index(request):
    personas = Persona.objects.all()
    context = {
        'personas':personas
    }
    return render(request, 'index.html', context)


def createPersona(request):
    if(request.method == 'GET'):
        form = PersonaForm()
        context = {
            'form':form
        }
    else:
        form = PersonaForm(request.POST)
        context = {
            'form':form
        }
        if(form.is_valid()):
            form.save()
            return redirect('index')
    return render(request, 'createItem.html', context)

def editPersona(request, id):
    persona = Persona.objects.get(id = id)
    if(request.method == 'GET'):
        form = PersonaForm(instance=persona)
        context = {
            'form':form
        }
    else:
        form = PersonaForm(request.POST, instance=persona)
        context = {
            'form':form
        }
        if(form.is_valid()):
            form.save()
            return redirect('index')
    return render(request, 'createItem.html', context)

def deletePersona(request, id):
    persona = Persona.objects.get(id=id)
    persona.delete()
    return redirect('index')