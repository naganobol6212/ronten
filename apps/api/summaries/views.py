from rest_framework import viewsets

from .models import Summary
from .serializers import SummarySerializer


class SummaryViewSet(viewsets.ModelViewSet):
    """list / retrieve / create / update / destroy を自動提供する ViewSet."""

    queryset = Summary.objects.all()
    serializer_class = SummarySerializer
