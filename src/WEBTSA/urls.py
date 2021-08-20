from django.conf.urls import include, url
from django.urls import path    
from django.contrib import admin
from django.conf import settings

from webtsainterface.api import v1_api
import webtsainterface.views as views
from django.conf.urls.static import static

#BASE_URL = settings.SITE_URL[1:]
BASE_URL = '127.0.0.1'

urlpatterns = [
    #url(r'^' + BASE_URL  + '$', views.index),
    #url(r'^' + BASE_URL, include(v1_api.urls)),
    #url(r'^' + BASE_URL  + 'admin/', admin.site.urls),
    #url(r'^' + BASE_URL  + 'select2/', select2.urls),
    
    path('', views.index, name='tsa-application' ),
    url(r'^' + BASE_URL, include(v1_api.urls)),
    url(r'^' + BASE_URL  + '/admin/', admin.site.urls),
    #url(r'^' + BASE_URL  + 'select2/', select2.urls),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)