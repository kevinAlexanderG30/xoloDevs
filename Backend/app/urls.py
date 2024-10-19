from django.urls import path, include
from .views import RegisterView, LoginView
from rest_framework.routers import DefaultRouter
from .views import CowViewSet,ProfilePictureUpdateView, UserProfileView

router = DefaultRouter()
router.register(r'cows', CowViewSet, basename='cow')



urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('profile/<int:user_id>/', UserProfileView.as_view(), name='user-profile'),

    path('', include(router.urls)),
    path('update-profile-picture/', ProfilePictureUpdateView.as_view(), name='update-profile-picture'),

]
