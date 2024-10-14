from django.shortcuts import render, HttpResponse
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, SeekerSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Seeker
from .models import ToDoItem

# Create your views here.
def home(request):
    return render(request, "home.html")

def todos(request):
    items = ToDoItem.objects.all()
    return render(request, "todos.html", {"todos":items})

class SeekerListCreate(generics.ListCreateAPIView):
    serializer_class = SeekerSerializer
    #PASS AAN NAAR IsAuthenticated:
    permission_classes = [AllowAny]

    def get_queryset(self):
        # user = self.request.user

        # Filters hier toevoegen .filter(author=... etc)
        return Seeker.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class SeekerDelete(generics.DestroyAPIView):
    serializer_class = SeekerSerializer
    #PASS AAN NAAR IsAuthenticated:
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Seeker.objects.all()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

