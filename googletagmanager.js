(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.googletagmanager = factory();
  }
}(this, function () {
  var window = this;
  var document = window.document || {title: '', hidden: false};

  return function googletagmanager(id, datalayer) {
    if (typeof datalayer === 'undefined') {
      datalayer = 'dataLayer';
    }

    if (typeof id !== 'string' || id.length === 0) {
      console.warn(
        'Expected a Google Tag Manager ID. Received: "%s". ' +
        'Must be something like: "GTM-ABC123". ' +
        'Not loading Google Tag Manager.',
        id
      );
      return;
    }

    /* jshint ignore:start */
    /* Google Tag Manager */
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script',datalayer,id);
    /* End Google Tag Manager */
    /* jshint ignore:end */
  };
}));
