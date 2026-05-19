from django.db import models


# Create your models here.


class Summary(models.Model):
    """
    3行要約トレーニングの記録モデル。

    Rontenアプリにおける論点整理トレーニングの1種類。
    日々の出来事や学びを「What(何を) / Why(なぜ) / So what(だから何)」の3視点で
    構造化することで、聞く力と言語化する力を鍛える。

    関連トレーニング(将来別モデルとして追加予定):
    - PrepMemo: PREP法での発信
    - ThreeBoxMemo: 事実 / 感情 / 要望の3箱メモ
    - SkyRainUmbrella: 空・雨・傘での振り返り
    - PyramidMemo: ピラミッドメモ
    """

    what = models.TextField("What(何を)")
    why = models.TextField("Why(なぜ)")
    so_what = models.TextField("So what(だから何)")
    created_at = models.DateTimeField("作成日時", auto_now_add=True)
    updated_at = models.DateTimeField("更新日時", auto_now=True)

    class Meta:
        verbose_name = "3行要約"
        verbose_name_plural = "3行要約"
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.created_at:%Y-%m-%d} - {self.what[:30]}"
