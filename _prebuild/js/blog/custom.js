/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-5', 'auto');
ga('send', 'pageview');


function trackEvent(cat, action, label){
  if (cat && action && label) {
    ga('send', 'event', cat, action, label);
  }
}


$(document).ready(function() {
var body = $('body');

  // Reading Time
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });

  if ( body.data('lazyload') ) {
    $('#loader li img').lazyload({
      effect : "fadeIn",
      threshold : 50
    });
  }

  if ( body.data('lettering') ) {
    $("#post-title").lettering();
  }

  if ( body.data('fittext') ) {
    $("#post-title").fitText();
  }

  if ( body.data('video') ) {
    $(".body").fitVids();
  }

});

// Analytics additions
(function($, win, doc) {

  $.scrollDepth({
    // minHeight: 2000,
    elements: [
        'article .body'
      , '#next-previous-post'
      , '#profile'
    ],
    percentage: true,
    userTiming: true,
    pixelDepth: false,
    nonInteraction: false
  });

  riveted.init({
    reportInterval: 10,   // Default: 5
    idleTimeout: 40,      // Default: 30
    nonInteraction: true  // Default: true
  });


})(jQuery, window, document);
