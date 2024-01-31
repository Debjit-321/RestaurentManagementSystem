from django.shortcuts import render
from.models import Userdetails

# Create your views here.
def home(request):
     if request.method =='POST':
          username=request.POST['username']
          email=request.POST['email']
          password=request.POST['password']
          user=Userdetails(username=username,email=email,password=password)
          user.save()
     return render(request,'index.html')