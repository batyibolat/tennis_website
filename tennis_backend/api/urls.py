from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    RegisterView, UserProfileViewSet, PlayerViewSet,
    NewsViewSet, TournamentViewSet, ChatBotView, UserProfileDetailView
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'players', PlayerViewSet)
router.register(r'news', NewsViewSet)
router.register(r'tournaments', TournamentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('chat/', ChatBotView.as_view(), name='chat'),
    path('profile/', UserProfileDetailView.as_view(), name='profile-detail'),
]