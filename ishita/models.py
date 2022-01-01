from django.db import models

from django.utils.html import format_html
from tinymce.models import HTMLField
# Create your models here.


class Category(models.Model):
    title = models.CharField(max_length=55)
    category_id = models.AutoField(primary_key=True)
    url = models.CharField(max_length=100)
    add_date = models.DateTimeField(auto_now_add=True,null=True)

    def __str__(self):
        return self.title

    def getid(self):
        return self.category_id

    class Meta:
        verbose_name_plural = "Categories"



class Information(models.Model):
    about =  HTMLField()
    behance = models.CharField(max_length=100)
    linkedin = models.CharField(max_length=100)
    gmail = models.CharField(max_length=100)
    greetings = models.CharField(max_length=30)
    add_date = models.DateTimeField(auto_now_add=True,null=True)

    def __str__(self):
        return self.gmail

    class Meta:
        verbose_name_plural = "Infromation"

class Skills(models.Model):
    skillname =  models.CharField(max_length=35)
    image_link=models.CharField(max_length=200)

    class Meta:
        verbose_name_plural = "Skills"
    
    def __str__(self):
        return self.skillname


class Post(models.Model):
    title = models.CharField(max_length=20)
    post_id=models.AutoField(primary_key=True)
    description = HTMLField()
    url=models.CharField(max_length=100)
    image = models.ImageField(upload_to="posts/")
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    add_date = models.DateTimeField(auto_now_add=True,null=True)

    def img_tag(self):
        return format_html('<img src="/media/{}"  style="width:160x; height:90px; border-radius:5px;"',format(self.image))
   
    def __str__(self):
        return self.title
    class Meta:
        verbose_name_plural = "Posts"

class PostImage(models.Model):
    post = models.ForeignKey(Post, default=None, on_delete=models.CASCADE)
    images = models.FileField(upload_to = 'images/')
    
    def __str__(self):
        return self.post.title