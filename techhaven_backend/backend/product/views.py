from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Laptop, Speaker, HpEb
from .serializers import LaptopSerializer, SpeakerSerializer, HpEbSerializer

@api_view(['POST'])
def filter_laptops(request):
    categories = request.data.get('categories', [])
    if categories:
        laptops = Laptop.objects.filter(laptop_type__in=categories)
    else:
        laptops = Laptop.objects.all()
    
    serializer = LaptopSerializer(laptops, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_laptop_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            laptop = Laptop.objects.get(name=name)
            serializer = LaptopSerializer(laptop)  
            return Response(serializer.data)
        except Laptop.DoesNotExist:
            return Response({'error': 'Laptop not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_speakers(request):
    categories = request.data.get('categories', [])
    if categories:
        speakers = Speaker.objects.filter(speaker_type__in=categories)
    else:
        speakers = Speaker.objects.all()
    
    serializer = SpeakerSerializer(speakers, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_speaker_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            speaker = Speaker.objects.get(name=name)
            serializer = SpeakerSerializer(speaker)  
            return Response(serializer.data)
        except Speaker.DoesNotExist:
            return Response({'error': 'Speaker not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_Hp_Eb(request):
    categories = request.data.get('categories', [])
    if categories:
        hp_eb = HpEb.objects.filter(headphone_earbud_type__in=categories)
    else:
        hp_eb = HpEb.objects.all()
    
    serializer = HpEbSerializer(hp_eb, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_Hp_Eb_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            hp_eb = HpEb.objects.get(name=name)
            serializer = HpEbSerializer(hp_eb)  
            return Response(serializer.data)
        except HpEb.DoesNotExist:
            return Response({'error': 'Headphone/Earbud not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)
