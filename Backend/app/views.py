from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from drf_yasg.utils import swagger_auto_schema

from .Serializer.userSerializer import RegisterSerializer, LoginSerializer, UserSerializer

User = get_user_model()


from rest_framework import serializers
from .models import Cow, PhoneNumber

class PhoneNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = PhoneNumber
        fields = ['number', 'type']

class UserProfileSerializer(serializers.ModelSerializer):
    phone_numbers = PhoneNumberSerializer(many=True, read_only=True)  # Números de teléfono relacionados

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'profile_picture', 'phone_numbers']

class CowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cow
        fields = '__all__'

from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ProfilePictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['profile_picture']


from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser

class ProfilePictureUpdateView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]  # Permitir subir archivos

    @swagger_auto_schema(request_body=ProfilePictureSerializer)
    def patch(self, request):
        user = request.user
        serializer = ProfilePictureSerializer(user, data=request.data, partial=True)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Foto de perfil actualizada exitosamente"}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CowViewSet(viewsets.ModelViewSet):
    queryset = Cow.objects.all()
    serializer_class = CowSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]  # Lectura para todos, modificaciones solo autenticado

class RegisterView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(request_body=RegisterSerializer)
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Usuario registrado con éxito"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
from django.shortcuts import get_object_or_404

class UserProfileView(APIView):
    permission_classes = [AllowAny]  # Desactivamos la autenticación

    @swagger_auto_schema(responses={200: UserProfileSerializer})
    def get(self, request, user_id):
        user = get_object_or_404(User, id=user_id)  # Busca el usuario o lanza 404 si no existe
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

class LoginView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(request_body=LoginSerializer, responses={200: 'Token de acceso y código de usuario'})
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user_id': user.id,
                'status': 200
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)