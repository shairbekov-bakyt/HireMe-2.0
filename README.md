# HireMe

- install git repo
```
git clone https://github.com/shairbekov-bakyt/HireMe-2.0/
  or
git clone git@github.com:shairbekov-bakyt/HireMe-2.0/
```

## run development

- create .env file
```
cp example.env .dev.env
```
- run docker container
```
docker compose up --build -d
```

- run application 
```
python3 manage.py runserver
```

## run production

- create .env file
```
cp example.env .env
```
- run docker container
```
docker compose -f docker-compose-prod.yml up --build -d
```
