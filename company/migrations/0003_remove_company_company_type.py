# Generated by Django 4.1.7 on 2023-03-25 04:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("company", "0002_companytype_alter_company_options_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="company",
            name="company_type",
        ),
    ]
