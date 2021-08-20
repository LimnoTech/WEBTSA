from WEBTSA.settings.base import TEMPLATES
from django.views.generic.base import TemplateView
from django.shortcuts import render


#class TsaView(TemplateView):
#    #template_name = 'webtsainterface/index.html'
#    template_name = 'templates\webtsainterface\index.html'

def index(request):
    return render(
        request,
        'index.html'
    )
