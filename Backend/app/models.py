from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='images/vendetuvaca/Inscripcion/', null=True, blank=True)  

    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',  
        blank=True
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',  
        blank=True
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email


class PhoneNumber(models.Model):
    user = models.ForeignKey(User, related_name='phone_numbers', on_delete=models.CASCADE)  
    number = models.CharField(max_length=20)  
    type = models.CharField(max_length=10, choices=(('home', 'Home'), ('work', 'Work'), ('mobile', 'Mobile')), default='mobile')

    def __str__(self):
        return f"{self.number} ({self.type})"