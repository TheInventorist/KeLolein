from django.shortcuts import render, redirect
from .models import Sale
from .forms import SaleForm

def index(request):
    sales = Sale.objects.all()
    context = {
        'sales':sales
    }
    return render(request, 'index.html', context)


def createSale(request):
    if(request.method == 'GET'):
        form = SaleForm()
        context = {
            'form': form
        }
    else:
        form = SaleForm(request.POST)
        context = {
            'form': form
        }
        if(form.is_valid()):
            form.save()
            return redirect('index')
    return render(request, 'createitem.html', context)


def editSale(request, id):
    sale = Sale.objects.get(id=id)
    if request.method == 'GET':
        form = SaleForm(instance=sale)
        context = {
            'form':form
        }
    else:
        form = SaleForm(request.POST, instance= sale)
        context = {
            'form':form
        }
        if form.is_valid():
            form.save()
            return redirect('index')
    return render(request, 'createitem.html', context)


def deleteSale(requst, id):
    sale = Sale.objects.get(id=id)
    sale.delete()
    return redirect('index')