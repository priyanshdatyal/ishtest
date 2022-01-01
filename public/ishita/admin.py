from django.contrib import admin
from .models import Category,Post,Information, Skills, PostImage


#config of admin

class CategoryAdmin(admin.ModelAdmin):
    list_display=('title','category_id','url','add_date',)
    search_fields=('title',)

class InformationAdmin(admin.ModelAdmin):
    list_display=('gmail','behance','linkedin','add_date','greetings','about')
    search_fields=('add_date',)

class PostImageAdmin(admin.StackedInline):
    model = PostImage
    
class PostAdmin(admin.ModelAdmin):
    list_display=('title','post_id','url','add_date','img_tag',)
    search_fields=('title',)
    list_filter=('category',)
    list_per_page =10
    
    inlines = [PostImageAdmin]

class SkillsAdmin(admin.ModelAdmin):
    list_display=('skillname','image_link')
    search_fields=('skillname',)


admin.site.register(Category,CategoryAdmin)
admin.site.register(Post,PostAdmin)
admin.site.register(Information,InformationAdmin)
admin.site.register(Skills,SkillsAdmin)
admin.register(PostImage,PostImageAdmin)