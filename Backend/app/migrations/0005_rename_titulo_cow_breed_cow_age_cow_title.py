# Generated by Django 5.1.2 on 2024-10-19 01:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0004_cow_user"),
    ]

    operations = [
        migrations.RenameField(
            model_name="cow",
            old_name="titulo",
            new_name="breed",
        ),
        migrations.AddField(
            model_name="cow",
            name="age",
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="cow",
            name="title",
            field=models.CharField(default=2, max_length=100),
            preserve_default=False,
        ),
    ]
