# loopback-mixin-whitelist

Whitelist which remote methods are automatically exposed through the api via a whitelist on the model.json definition file

[![NPM](https://nodei.co/npm/loopback-mixin-whitelist.png?downloads=true&stars=true)](https://nodei.co/npm/loopback-mixin-whitelist/)

[![Media Suite](http://mediasuite.co.nz/ms-badge.png)](http://mediasuite.co.nz)

[![Build Status](https://travis-ci.org/mediasuitenz/loopback-mixin-whitelist.svg)](https://travis-ci.org/mediasuitenz/loopback-mixin-whitelist)

## Installation

```
npm install loopback-mixin-whitelist --save
```

## Usage
Create your own mixin file in the `server/mixins` directory (e.g. `server/mixins/method-whitelist.js`)

The contents of the file should be:
```
module.exports = require('loopback-mixin-whitelist')
```

Then, in your model .json file, you can whitelist methods as:
````
"mixins": {
    ...
    "MethodWhitelist": {
      "expose": [
        "findById"
      ]
    }
  }
  ```
