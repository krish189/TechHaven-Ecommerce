from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Laptop, Speaker, HpEb, LedTv, LedProjector, Microphone, ComputerAccessories, LaptopAccessories, MobileAccessories, HdmiAccessories, BarcodeScanner, Keyboard, Mouse, Monitor, KeyboardMouseCombo, HomeTheater, SmartLighting, CCTVCamera
from .serializers import LaptopSerializer, SpeakerSerializer, HpEbSerializer, LedTvSerializer, LedProjectorSerializer, MicrophoneSerializer, ComputerAccessoriesSerializer, LaptopAccessoriesSerializer, MobileAccessoriesSerializer, HdmiAccessoriesSerializer, BarcodeScannerSerializer, KeyboardSerializer, MouseSerializer, MonitorSerializer, KeyboardMouseSerializer, HomeTheaterSerializer, SmartLightingSerializer, CCTVSerializer

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

@api_view(['POST'])
def filter_Microphone(request):
    microphones = Microphone.objects.all()
    serializer = MicrophoneSerializer(microphones, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_Microphone_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            microphones = Microphone.objects.get(name=name)
            serializer = MicrophoneSerializer(microphones)  
            return Response(serializer.data)
        except Microphone.DoesNotExist:
            return Response({'error': 'Microphone not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_computer_accessories(request):
    categories = request.data.get('categories', [])
    if categories:
        computer_accessories = ComputerAccessories.objects.filter(accessory_category__in=categories)
    else:
        computer_accessories = ComputerAccessories.objects.all()
    
    serializer = ComputerAccessoriesSerializer(computer_accessories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_computer_accessories_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            computer_accessories = ComputerAccessories.objects.get(name=name)
            serializer = ComputerAccessoriesSerializer(computer_accessories)  
            return Response(serializer.data)
        except ComputerAccessories.DoesNotExist:
            return Response({'error': 'Computer Accessories not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_laptop_accessories(request):
    categories = request.data.get('categories', [])
    if categories:
        laptop_accessories = LaptopAccessories.objects.filter(accessory_category__in=categories)
    else:
        laptop_accessories = LaptopAccessories.objects.all()
    
    serializer = LaptopAccessoriesSerializer(laptop_accessories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_laptop_accessories_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            laptop_accessories = LaptopAccessories.objects.get(name=name)
            serializer = LaptopAccessoriesSerializer(laptop_accessories)  
            return Response(serializer.data)
        except LaptopAccessories.DoesNotExist:
            return Response({'error': 'Laptop Accessories not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_mobile_accessories(request):
    categories = request.data.get('categories', [])
    if categories:
        mobile_accessories = MobileAccessories.objects.filter(accessory_category__in=categories)
    else:
        mobile_accessories = MobileAccessories.objects.all()
    
    serializer = MobileAccessoriesSerializer(mobile_accessories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_mobile_accessories_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            mobile_accessories = MobileAccessories.objects.get(name=name)
            serializer = MobileAccessoriesSerializer(mobile_accessories)  
            return Response(serializer.data)
        except MobileAccessories.DoesNotExist:
            return Response({'error': 'Mobile Accessories not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_hdmi_accessories(request):
    categories = request.data.get('categories', [])
    if categories:
        hdmi_accessories = HdmiAccessories.objects.filter(accessory_category__in=categories)
    else:
        hdmi_accessories = HdmiAccessories.objects.all()
    
    serializer = HdmiAccessoriesSerializer(hdmi_accessories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_hdmi_accessories_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            hdmi_accessories = HdmiAccessories.objects.get(name=name)
            serializer = HdmiAccessoriesSerializer(hdmi_accessories)  
            return Response(serializer.data)
        except HdmiAccessories.DoesNotExist:
            return Response({'error': 'Hdmi Accessories not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_bs(request):
    bs = BarcodeScanner.objects.all()
    serializer = BarcodeScannerSerializer(bs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_bs_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            bs = BarcodeScanner.objects.get(name=name)
            serializer = BarcodeScannerSerializer(bs)  
            return Response(serializer.data)
        except BarcodeScanner.DoesNotExist:
            return Response({'error': 'Barcode Scanner not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_keyboard(request):
    categories = request.data.get('categories', [])
    if categories:
        keyboard = Keyboard.objects.filter(keyboard_category__in=categories)
    else:
        keyboard = Keyboard.objects.all()
    
    serializer = KeyboardSerializer(keyboard, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_keyboard_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            keyboard = Keyboard.objects.get(name=name)
            serializer = KeyboardSerializer(keyboard)  
            return Response(serializer.data)
        except Keyboard.DoesNotExist:
            return Response({'error': 'Keyboard not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_mouse(request):
    categories = request.data.get('categories', [])
    if categories:
        mouse = Mouse.objects.filter(mouse_type__in=categories)
    else:
        mouse = Mouse.objects.all()
    
    serializer = MouseSerializer(mouse, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_mouse_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            mouse = Mouse.objects.get(name=name)
            serializer = MouseSerializer(mouse)  
            return Response(serializer.data)
        except Mouse.DoesNotExist:
            return Response({'error': 'Mouse not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_monitor(request):
    categories = request.data.get('categories', [])
    if categories:
        monitor = Monitor.objects.filter(monitor_type__in=categories)
    else:
        monitor = Monitor.objects.all()
    
    serializer = MonitorSerializer(monitor, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_monitor_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            monitor = Monitor.objects.get(name=name)
            serializer = MonitorSerializer(monitor)  
            return Response(serializer.data)
        except Monitor.DoesNotExist:
            return Response({'error': 'Monitor not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_combos(request):
    combos = KeyboardMouseCombo.objects.all()
    serializer = KeyboardMouseSerializer(combos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_combos_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            combos = KeyboardMouseCombo.objects.get(name=name)
            serializer = KeyboardMouseSerializer(combos)  
            return Response(serializer.data)
        except KeyboardMouseCombo.DoesNotExist:
            return Response({'error': 'Keyboard Mouse Combo not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_home_theater(request):
    home_theater = HomeTheater.objects.all()
    serializer = HomeTheaterSerializer(home_theater, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_home_theater_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            home_theater = HomeTheater.objects.get(name=name)
            serializer = HomeTheaterSerializer(home_theater)  
            return Response(serializer.data)
        except HomeTheater.DoesNotExist:
            return Response({'error': 'Home Theater not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_smart_light(request):
    smart_light = SmartLighting.objects.all()
    serializer = SmartLightingSerializer(smart_light, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_smart_light_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            smart_light = SmartLighting.objects.get(name=name)
            serializer = SmartLightingSerializer(smart_light)  
            return Response(serializer.data)
        except SmartLighting.DoesNotExist:
            return Response({'error': 'Smart Light not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)

@api_view(['POST'])
def filter_cctv(request):
    cctv = CCTVCamera.objects.all()
    serializer = CCTVSerializer(cctv, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def filter_cctv_by_name(request):
    name = request.data.get('name')
    if name:
        try:
            cctv = CCTVCamera.objects.get(name=name)
            serializer = CCTVSerializer(cctv)  
            return Response(serializer.data)
        except CCTVCamera.DoesNotExist:
            return Response({'error': 'CCTV Camera not found'}, status=404)
    return Response({'error': 'Name parameter is missing'}, status=400)