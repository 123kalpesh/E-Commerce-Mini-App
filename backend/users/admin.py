from django.contrib import admin
from django.contrib.auth import get_user_model
from .models import Address

User = get_user_model()


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'is_staff')


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('user', 'line1', 'city', 'country', 'default')
