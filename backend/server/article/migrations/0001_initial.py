# Generated by Django 3.1.2 on 2022-06-26 09:20

from django.db import migrations, models
import django.db.models.deletion
import tinymce.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='Название статьи')),
                ('label', models.ImageField(blank=True, upload_to='uploads/labels', verbose_name='Лого статьи')),
                ('is_blocked', models.BooleanField(default=True, verbose_name='Заблокированно?')),
            ],
            options={
                'verbose_name': 'Статья курса',
                'verbose_name_plural': 'Статьи курса',
            },
        ),
        migrations.CreateModel(
            name='Extra',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='Название екстра задания')),
                ('text', tinymce.models.HTMLField(verbose_name='Текст екстра задания')),
                ('image', models.ImageField(blank=True, upload_to='uploads/extra', verbose_name='Картинка для задания')),
                ('article_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='article.article')),
            ],
            options={
                'verbose_name': 'Екстра задание',
                'verbose_name_plural': 'Екстра задания',
            },
        ),
        migrations.CreateModel(
            name='Bonus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='Название для бонуса')),
                ('text_bonus', tinymce.models.HTMLField(verbose_name='Текст для бонуса')),
                ('image', models.ImageField(blank=True, upload_to='uploads/bonus/', verbose_name='Картинка для бонуса')),
                ('pdf', models.FileField(blank=True, upload_to='uploads/bonus', verbose_name='ПДФка для бонуса')),
                ('meditation', models.FileField(blank=True, upload_to='uploads/meditation', verbose_name='Медитация')),
                ('instruction', models.FileField(blank=True, default='uploads/meditation/как_правильно_медитировать.pdf', upload_to='uploads/meditation', verbose_name='Инструкция к медитации')),
                ('article_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='article.article')),
            ],
            options={
                'verbose_name': 'Бонус задание',
                'verbose_name_plural': 'Бонус задания',
            },
        ),
        migrations.CreateModel(
            name='ArticleText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='Название статьи')),
                ('text', tinymce.models.HTMLField(verbose_name='Текст статьи')),
                ('image_1', models.ImageField(blank=True, upload_to='uploads/articles', verbose_name='Картинка для статьи 1')),
                ('image_2', models.ImageField(blank=True, upload_to='uploads/articles', verbose_name='Картинка для статьи 2')),
                ('image_3', models.ImageField(blank=True, upload_to='uploads/articles', verbose_name='Картинка для статьи 3')),
                ('article_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='article.article')),
            ],
            options={
                'verbose_name': 'Основной текст статьи',
                'verbose_name_plural': 'Текст для статей курса',
            },
        ),
    ]
