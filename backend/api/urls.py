# website_newsong/backend/api/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.SongListAPI.as_view()),
    path('<int:pk>/', views.SongDetailAPI.as_view())
]
