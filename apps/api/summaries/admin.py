from django.contrib import admin

from .models import Summary


@admin.register(Summary)
class SummaryAdmin(admin.ModelAdmin):
    list_display = ("created_at", "what", "why", "so_what")
    list_filter = ("created_at",)
    search_fields = ("what", "why", "so_what")
    ordering = ("-created_at",)
