from django.db import models


class Summary(models.Model):
    """3行要約: What / Why / So What の論点整理エントリ."""

    what = models.CharField("What (何が起きたか)", max_length=200)
    why = models.CharField("Why (なぜそうなったか)", max_length=200)
    so_what = models.CharField("So What (だから何が言えるか)", max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "3行要約"
        verbose_name_plural = "3行要約"

    def __str__(self) -> str:
        return f"[{self.created_at:%Y-%m-%d}] {self.what}"
