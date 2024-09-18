from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Laptop, Speaker, HpEb, LedTv, LedProjector
from .serializers import LaptopSerializer, SpeakerSerializer, HpEbSerializer, LedTvSerializer, LedProjectorSerializer

@api_view(['POST'])
def filter_laptops(request):
    categories = request.data.get('categories', [])
    print('Categories:', categories) 
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

@api_view(['POST'])
def filter_LedTv(request):
    categories = request.data.get('categories', [])
    if categories:
        led_tv = LedTv.objects.filter(tv_type__in=categories)
    else:
        led_tv = LedTv.objects.all()
    
    serializer = LedTvSerializer(led_tv, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_LedTv_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            led_tv = LedTv.objects.get(name=name)
            serializer = LedTvSerializer(led_tv)  
            return Response(serializer.data)
        except LedTv.DoesNotExist:
            return Response({'error': 'LedTv not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_LedProjector(request):
    projectors = LedProjector.objects.all()
    serializer = LedProjectorSerializer(projectors, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_LedProjector_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            projectors = LedProjector.objects.get(name=name)
            serializer = LedProjectorSerializer(projectors)  
            return Response(serializer.data)
        except LedProjector.DoesNotExist:
            return Response({'error': 'Led Projector not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)
