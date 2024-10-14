"""
URL configuration for recruitment_tool_django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rc_app.views import CreateUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rc_app/user/register/', CreateUserView.as_view(),name='register'),
    path("rc_app/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("rc_app/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("rc_app-auth/", include("rest_framework.urls")),
    path("rc_app/", include("rc_app.urls"))
]
