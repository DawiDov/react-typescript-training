# Generated by Django 3.1.2 on 2022-06-26 12:07

import django.db.models.deletion
from django.db import migrations, models

import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='articletext',
            name='id',
            field=models.AutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='articletext',
            name='article_id',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='article.article'),
        ),
        migrations.AlterField(
            model_name='articletext',
            name='text',
            field=tinymce.models.HTMLField(null=True, verbose_name='Текст статьи'),
        ),
        migrations.AlterField(
            model_name='bonus',
            name='article_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='article.article'),
        ),
        migrations.AlterField(
            model_name='extra',
            name='article_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='article.article'),
        ),
    ]
