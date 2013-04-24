if ( $('body').attr('id') === 'home' ){

  (function() {
    function injectScript(src) {
      var js = document.createElement('script');
      js.src = src;
      document.getElementsByTagName('head')[0].appendChild(js);
    }
    
    var originalR = window.R;
    var originalRdio = window.rdio;
    window.R = window.rdio = window.__rdio = {
      _config: {
        client_id: "JkQ9oKroxXdL2sjeGErpng",
        helper: "helper.html",
        iframe: "http://www.rdio.com/api/iframe/", 
        oauth2: "https://www.rdio.com/oauth2/authorize",
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


  // Rdio API

  var R = window.R;
  var args = args || {};  
  var rdioActive = false;
  var rdio = $('.rdio');
  var rdioAPI = $('#rdio');
  var rdioID = $('#rdio').prop('id');


  R.ready(function() {
    
    // fetch the user's id
    R.request({
      method: "findUser",
      content: {
        vanityName: 'manikrathee'
      },
      success: function(response) {
        self.user = response.result;
        R.request({
          method: "getHeavyRotation",
          content: {
            user: self.user.key,
            // type: "albums",
          },
          success: function(response) {
            var top = response.result[0];
            // console.log(top);
            rdio.html('<div><p>' + top.name + " by " + top.artist + '</p></div>');
            rdioAPI.find('span.logo').remove();
            $("#rdio").prepend('<span class="ss-icon logo"></span>');
            rdioAPI.find('span.logo').prepend(rdioID);
            // Set rdioActive to true so logofyAPI and activate API can fire
            rdioActive = true;
            centerAPI();
          },
          error: function(response) {
          }
        });
      },
      error: function(response) {
      }
    })
  });
}