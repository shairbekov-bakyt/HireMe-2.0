#!/bin/bash

# Collect static files
echo "Collect static files"
python3 manage.py collectstatic --no-input

# make migrations
echo "makemigrations"
python3 manage.py makemigrations

echo "migrate"
python3 manage.py migrate

# Start server
echo "Starting server"

gunicorn config.wsgi:application --bind 0.0.0.0:8000 --reload

exec "$@"
