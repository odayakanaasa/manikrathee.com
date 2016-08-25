// View Mode Toggle

var
    viewModeContainer = $('#view-mode--container')
  , viewModeToggle    = $('#view-mode--toggle')
  ;

var viewMode = {

  // TODO set & eval a cookie to remember this value

  init: function() {
    this.addEventListeners();
  },

  addEventListeners: function() {
    var _this = this;
    viewModeToggle.on('click', function() {
      _this.eval();
    });
  },

  eval: function() {
    var activeMode = viewModeContainer.find( $('input[type=radio]:checked') ).attr('id');

    if ( activeMode === 'view-mode--light' ) {
      this.lightMode();
    } else {
      this.darkMode();
    }
  },

  darkMode: function() {
    $body.addClass('view-mode--dark');
  },

  lightMode: function() {
    $body.removeClass('view-mode--dark');
  },
}

viewMode.init();



// Animation
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        if (window.CP.shouldStopExecution(2)) {
            break;
        }
        var source = arguments[i];
        for (var key in source) {
            if (window.CP.shouldStopExecution(1)) {
                break;
            }
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
        window.CP.exitedLoop(1);
    }
    return target;
    window.CP.exitedLoop(2);
};

// var OPTS = {
//     fill: 'none',
//     radius: 25,
//     strokeWidth: { 50: 0 },
//     scale: { 0: 1 },
//     angle: { 'rand(-35, -70)': 0 },
//     duration: 500,
//     left: 0,
//     top: 0,
//     easing: 'cubic.out'
// };

var color1;
var color2;

var colorAnimationEval = function() {
  if ( $body.hasClass('view-mode--dark') ) {
    color1: '#EFF0F0';
    color2: '#fff';
  } else {
    color1: '#2b2b2b';
    color2: '#1f1f1f';
  }
}

var circle1 = new mojs.Shape({
    fill: 'none',
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    angle: { 'rand(-35, -70)': 0 },
    duration: 500,
    left: 0,
    top: 0,
    easing: 'cubic.out',
    stroke: color1,
});
var circle2 = new mojs.Shape({
    fill: 'none',
    radius: 25,
    strokeWidth: { 50: 0 },
    scale: { 0: 1 },
    angle: { 'rand(-35, -70)': 0 },
    duration: 500,
    left: 0,
    top: 0,
    easing: 'cubic.out',
    radius: { 0: 15 },
    strokeWidth: { 30: 0 },
    stroke: color2,
    delay: 'rand(75, 150)'
});

viewModeToggle[0].addEventListener('click', function (e) {
    colorAnimationEval();
    circle1.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
    circle2.tune({
        x: e.pageX,
        y: e.pageY
    }).replay();
});

