from django.core.management.base import BaseCommand
from products.models import Category, Product


class Command(BaseCommand):
    help = 'Seed sample categories and products'

    def handle(self, *args, **options):
        categories = ['Electronics', 'Books', 'Clothing']
        for name in categories:
            Category.objects.get_or_create(name=name)

        if Product.objects.exists():
            self.stdout.write(self.style.WARNING('Products already exist, skipping'))
            return

        electronics = Category.objects.get(name='Electronics')
        books = Category.objects.get(name='Books')
        clothing = Category.objects.get(name='Clothing')

        Product.objects.create(name='Wireless Headphones', description='Noise-cancelling', price=99.99, stock=50, category=electronics)
        Product.objects.create(name='Sci-Fi Novel', description='Exciting space adventure', price=14.99, stock=200, category=books)
        Product.objects.create(name='T-Shirt', description='100% cotton', price=19.99, stock=150, category=clothing)

        self.stdout.write(self.style.SUCCESS('Seeded products and categories'))
