from django.urls import path
from rest_framework.schemas import get_schema_view

from .views import (CategoryDetailView, CategoryView, RecipeDetailView,
                    RecipeView)

urlpatterns = [
    path("recipes/", RecipeView.as_view({"get": "list"})),
    path("categories/", CategoryView.as_view({"get": "list"})),
    path("recipes/<int:pk>", RecipeDetailView.as_view({"get": "retrieve"})),
    path("categories/<int:pk>", CategoryDetailView.as_view({"get": "retrieve"})),
    path(
        "openapi",
        get_schema_view(title="Your Project", description="API for all things …"),
        name="openapi-schema",
    ),
]
