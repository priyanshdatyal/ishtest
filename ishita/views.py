import json
from django.shortcuts import get_object_or_404, render
from ishita.models import Post, Category, Information, Skills, PostImage

filter_category=''

def index(request):
    categs = Category.objects.all().order_by('title')
    filter_category= Category.objects.order_by('title').values_list('category_id', flat=True).first()
    posts = Post.objects.filter(category=filter_category).order_by('title')
    info = Information.objects.all()
    skills = Skills.objects.all().order_by('skillname')
    postid = Post.objects.order_by('title').values_list('post_id', flat=True).first()
    header_photo= Post.objects.filter(category=filter_category)
    photos = PostImage.objects.filter(post=postid)
    data={
        'posts':posts,
        'categs': categs,
        'info':info,
        'skills':skills,
        'photos':photos,
        'header_photo':header_photo,
        }

    return render(request,'index.html',data )


def load_list(request):
    get_cat_id = request.GET.get('cat_id')
    posts = Post.objects.filter(category_id=get_cat_id).order_by('title')
    return render(request, 'portList.html', {'posts': posts})

    
def set_images(request):
    get_post_id = request.GET.get('post_id')
    photos = PostImage.objects.filter(post=get_post_id)
    header_photo= Post.objects.filter(post_id=get_post_id)
    return render(request, 'images_list.html', {'photos': photos,'header_photo':header_photo})

def page_not_found(request, exception):
    return render(request,'404.html',exception)