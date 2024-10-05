from django.db import models

class Order(models.Model):    
    username = models.CharField(max_length=255) 
    total_items = models.PositiveIntegerField()
    overall_subtotal = models.DecimalField(max_digits=10, decimal_places=2)
    card_holder_name = models.CharField(max_length=255)
    card_last_4_digits = models.CharField(max_length=4)
    payment_status = models.CharField(max_length=10, default='Pending')
    items = models.JSONField(default=dict)
    order_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"Order by {self.username}, total items: {self.total_items}, total price: {self.overall_subtotal}"
