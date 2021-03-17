# Movie Search App

## Environment

1. Create `.env` file inside `server/` folder with the following keys:

```
DB_CONNECTION=app-db:27017/mongo-test
PORT=5000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

OMDB_API_KEY=
```
### Note: 
- Get Google Client keys from console.developers.google.com
- Get OMDB_API_KEY from http://www.omdbapi.com/apikey.aspx

## Instalation

1. Create Docker images:

  - `docker build -t client ./web`
  - `docker build -t server ./server`

2. Use Docker compose to set up environment:

  - `docker-compose up -d`

## Using

- Front-end is exposed on http://localhost:3000
- Backend-end is exposed on http://localhost:5000