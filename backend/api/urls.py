from django.urls import path
from .views import ContactEmailView

urlpatterns = [
    path('contacto/', ContactEmailView.as_view(), name='contacto'),
]
