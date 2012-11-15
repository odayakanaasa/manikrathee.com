
(function() {
  function injectScript(src) {
    var js = document.createElement('script');
    js.src = src;
    document.getElementsByTagName('head')[0].appendChild(js);
  }
  
  // We create the bare minimum R here, with stubs for things that can be
  // called before the real initialization, as well as client-specific
  // configuration data. Then we load the real implementation script, 
  // which gets cached, minimized, versioned, etc, like normal. 
  var originalR = window.R;
  var originalRdio = window.rdio;
  window.R = window.rdio = window.__rdio = {
    _config: {
      client_id: "jIzIoQxELGiBUCzeYavYCA",
      helper: "helper.html",
      iframe: "http://rdio.com/api/iframe/", 
      oauth2: "https://rdio.com/oauth2/authorize",
      insideRdio: false,
      originalR: originalR,
      originalRdio: originalRdio,
      earlyReadies: [],
      earlySubscriptions: [], 
      earlyAccessToken: null
    },
    
    ready: function() {
      this._config.earlyReadies.push(arguments);
      return false;
    },
    
    on: function() {
      this._config.earlySubscriptions.push(arguments);
      return this;
    },
    
    initialized: function() {
      return false;
    },
    
    accessToken: function(value) {
      if (value === undefined) {
        return this._config.earlyAccessToken;
      }
      this._config.earlyAccessToken = value;
    }, 

    insideRdio: function() {
      return this._config.insideRdio;
    },
    
    noConflict: function(both) {
      window.R = this._config.originalR;
      if (both) {
        window.rdio = this._config.originalRdio;
      }
      return this;
    }
  };
  
  R.bind = R.on;

  injectScript("https://rdio.com/media/api/api-impl.6ef3cb79cfa8dd2abd146af1c180606e.js");
})();