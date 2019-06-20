# G A M S

[![Build Status](https://travis-ci.com/pietersweter/gams-server.svg?branch=master)](https://travis-ci.com/pietersweter/gams-server)

Create your profile and play games with your friends.

| Repository | Branch | Url |
|------------|--------|-----|
| stage      | [stage](https://github.com/pietersweter/gams-server/tree/stage) | https://gams-stage.herokuapp.com |
| production | [master](https://github.com/pietersweter/gams-server/tree/master) | https://gams-prod.herokuapp.com |

## Getting started

You can just use 

```
npm start
```

That will start the server on default port (4044), or alternatively you can execute 

```
node app.js -p <port_number>
```

to set your custom port.

## Development

Development is split into two main branches.

### master

Contains stable, reliable and tested version. Also for production build.
Merge stage -> master

### stage

Merge feature_branches -> stage

## Deployment

Push to stage for staging build.
Push to master for production build.

## Authors

* **Pogoś** - *Initial work* - [Siogop](https://github.com/siogop)
* **poe** - *Initial work* - [pietersweter](https://github.com/pietersweter)

## License

This project is licensed under the MIT License.
