# googletagmanager [![Build Status](https://secure.travis-ci.org/cofounders/googletagmanager.png?branch=master)](https://travis-ci.org/cofounders/googletagmanager)

Google Tag Manager loader for web apps

## Installation

### Bower

`bower install googletagmanager`

### NPM

`npm install googletagmanager`

or

`package.json`

```json
"dependencies": {
  "googletagmanager": ""
}
```

### HTML

```html
<script src="googletagmanager.js"></script>
```

## Usage

```javascript
// Using CommonJS
var googletagmanager = require('googletagmanager');

// or AMD
define(['googletagmanager'], function (googletagmanager) {
  // ...
})

// Invoking the GTM script loader
googletagmanager('GTM-ABC123');
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
