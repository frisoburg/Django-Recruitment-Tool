from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("todos/", views.todos, name="Todos"),
    path("seekers/", views.SeekerListCreate.as_view(), name="Seekers-List"),
    path("seekers/delete/<int:pk>/", views.SeekerDelete.as_view(), name="delete-note"),
]

