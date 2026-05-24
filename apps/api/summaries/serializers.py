from rest_framework import serializers

from .models import Summary


class SummarySerializer(serializers.ModelSerializer):
    """Summary モデルと JSON を相互変換する."""

    class Meta:
        model = Summary
        fields = ["id", "what", "why", "so_what", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]
