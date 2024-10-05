from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import OrderSerializer

@api_view(['POST'])
def order_details(request):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

