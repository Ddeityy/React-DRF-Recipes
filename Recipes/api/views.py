from rest_framework import viewsets

from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer

from rest_framework.response import Response
from rest_framework import generics


class RecipeView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailView(generics.ListAPIView):
    
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    
    def get_queryset(self):
        recipes = Recipe.objects.filter(category=self.kwargs['pk'])
        return recipes


class RecipeDetailView(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
