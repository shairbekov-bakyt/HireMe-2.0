# Generated by Django 4.1.7 on 2023-03-10 11:44

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userambitions",
            name="expectation",
            field=models.TextField(default=""),
            preserve_default=False,
        ),
    ]
