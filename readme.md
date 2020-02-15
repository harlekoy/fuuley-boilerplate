# Ordern.co Admin Dashboard

## Project setup
To install dependencies run the following
- `git clone https://github.com/ordernco/admin.git ordern-admin`
- `cd ordern-admin && npm install`
- run `vue ui` and then go to Tasks > Serve > Run task
```
npm install
```
## Other ways to run the project
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Docker setup
To run this app inside docker, run the following commands:
```bash
docker-compose up -d
docker-compose logs -f -t app
```
After runnig that you will attach to the container and see the logs,
when you see the message that application dev server was started,
you can then access `localhost:8080` to check the app.

When running the app for first time, it takes some time to actually
install all dependencies with `npm` so please be patient.
