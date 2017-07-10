(function() {

  function Animocon(el, options) {
      this.el = el;
      this.options = $.extend( {}, this.options );
      $.extend( this.options, options );

      this.checked = false;

      this.timeline = new mojs.Timeline();

      for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
          this.timeline.add(this.options.tweens[i]);
      }

      var self = this;
      this.el.addEventListener($.clickHandler, function() {
          if( self.checked ) {
              self.options.onUnCheck();
          }
          else {
              self.options.onCheck();
              self.timeline.replay();
          }
              self.checked = !self.checked;
      });
  }



  Animocon.prototype.options = {
      tweens : [
          new mojs.Burst({})
      ]
  };


// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// View Mode Toggle Animation
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var viewModeAnimHook = document.getElementById('view-mode--container');
var viewModeAnimTimeline = new mojs.Timeline();

viewModeAnimHook.addEventListener('click', function(){
    viewModeAnimTimeline.add(vmPop1, vmPop2, vmPop3, vmPop4, vmPop5).replay();
});

var vmPop1 = new mojs.Burst({
    parent:       viewModeAnimHook,
    count:        2,
    radius:       {0:60},
    children: {
        fill :      '#988ADE',
        duration:   1500,
        easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
        }
    });

var vmPop2 = new mojs.Burst({
    parent:   viewModeAnimHook,
    count:    6,
    radius:     {0:120},
    children: {
        fill:       '#DE8AA0',
        duration:   1200,
        delay:      50,
        easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
        }
    });

var vmPop3 = new mojs.Burst({
    parent:       viewModeAnimHook,
    count:        10,
    radius:       {0:90},
    children: {
        fill:       '#8AAEDE',
        duration:   1200,
        delay:      100,
        easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
        }
    });

var vmPop4 = new mojs.Burst({
    parent: viewModeAnimHook,
    count:    16,
    radius:   {0:50},
    children: {
        fill:       '#8ADEAD',
        duration:   1600,
        delay:      175,
        easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
        }
    });

var vmPop5 = new mojs.Burst({
    parent:   viewModeAnimHook,
    count:    32,
    radius:     {0:30},
    children: {
        fill:       '#DEC58A',
        duration:   1700,
        delay:      200,
        easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
        }
    });
// ..........................................
// ..........................................
// ..........................................
// END View Mode Toggle Animation
// ..........................................
// ..........................................
// ..........................................













// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// SWOON
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// var swoonHook = document.getElementById('swoon');
// var swoonTimeline = new mojs.Timeline();

// if (swoonHook) {
//   swoonHook.addEventListener('mouseover', function(){
//       swoonTimeline.add(swoon1, swoon2, swoon3, swoon4).replay();
//   });

//   var swoon1 = new mojs.Burst({
//       parent:       swoonHook,
//       count:        1,
//       radius:       {0:60},
//       children: {
//           fill :      '#988ADE',
//           duration:   1500,
//           easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
//           }
//       });


//   var swoon2 = new mojs.Burst({
//       parent:       swoonHook,
//       count:        30,
//       radius:       {0:90},
//       children: {
//           fill:       '#DE8A8A',
//           duration:   1200,
//           delay:      100,
//           easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
//           }
//       });

//   var swoon3 = new mojs.Burst({
//       parent:   swoonHook,
//       type: 'circle',
//       fill: 'transparent',
//       stroke: '#F35186',
//       strokeWidth: {5:0},
//       opacity: 0.4,
//       count:    4,
//       radius:     {0:230},
//       x : -122,
//       y : 33,
//       easing: mojs.easing.sin.out,
//       children: {
//           fill:       '#DEC58A',
//           duration:   1700,
//           delay:      200,
//           easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
//           }
//       });

//   var swoon4 = new mojs.Burst({
//       parent:   swoonHook,
//       type: 'circle',
//       radius:     {0:2},
//       x : 22,
//       y : -44,
//       easing: mojs.easing.sin.out,
//       children: {
//           fill:       '#DEC58A',
//           duration:   2200,
//           delay:      300,
//           easing:     mojs.easing.bezier(0.19, 1, 0.22, 1)
//           }
//       });
// }
// ..........................................
// ..........................................
// ..........................................
// END SWOON
// ..........................................
// ..........................................
// ..........................................





})();
