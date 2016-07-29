# Chatnon 2

Community chat room build with React/Redux/Express

## Local development server

```bash
$ npm start
```

## Deploying

Rename flightplan.example.js to flightplan.js and replace dummy data.

Spin up an Ubuntu server on Digital Ocean. Tested with `Ubuntu 16.04.1 x64`.

### For new droplets
```bash
$ fly provision:staging
$ fly provision:production
```

### Deploy to provisioned droplets
```bash
$ fly staging
$ fly production
```
