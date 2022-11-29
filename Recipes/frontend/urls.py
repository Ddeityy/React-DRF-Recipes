from django.urls import path

from . import views

urlpatterns = [
    path("recipes/", views.index),
    path("recipes/<int:id>", views.index),
    path("categories/", views.index),
    path("categories/<int:id>", views.index),
]
