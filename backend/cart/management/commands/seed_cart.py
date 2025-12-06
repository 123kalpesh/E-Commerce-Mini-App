from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from products.models import Product
from cart.models import Cart, CartItem

User = get_user_model()

class Command(BaseCommand):
    help = 'Seed a sample user and cart items for development'

    def handle(self, *args, **options):
        username = 'testuser'
        email = 'testuser@example.com'
        password = 'testpass123'

        user, created = User.objects.get_or_create(username=username, defaults={'email': email})
        if created:
            user.set_password(password)
            user.save()
            self.stdout.write(self.style.SUCCESS(f'Created user {username} / {password}'))
        else:
            self.stdout.write(self.style.WARNING(f'User {username} already exists'))

        products = list(Product.objects.all()[:5])
        if not products:
            self.stdout.write(self.style.ERROR('No products found. Run seed_products first.'))
            return

        cart, _ = Cart.objects.get_or_create(user=user)
        cart.items.all().delete()

        # create a few cart items
        for i, p in enumerate(products[:3], start=1):
            CartItem.objects.create(cart=cart, product=p, quantity=i+1)

        cart.save()
        self.stdout.write(self.style.SUCCESS(f'Created cart for {user.username} with {cart.items.count()} items'))
        self.stdout.write(self.style.SUCCESS('Done.'))
