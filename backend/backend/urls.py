from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from accounts.views import SignupView, LoginView, LogoutView, CalorieCountView, PredictDiseaseView, UploadedFileViewSet,ReminderViewSet

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/signup/', SignupView.as_view(), name='signup'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/logout/', LogoutView.as_view(), name='logout'),
    path('api/calorie-count/', CalorieCountView.as_view(), name='calorie-count'),
    path('api/predict/', PredictDiseaseView.as_view(), name='predict_disease'),
     path('api/reminder/', ReminderViewSet.as_view({'get': 'list', 'post': 'create'}), name='reminder'),
    path('api/upload/', UploadedFileViewSet.as_view({'post': 'create', 'get': 'list'}), name='upload'),
]