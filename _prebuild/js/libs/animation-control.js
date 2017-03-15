;(function () {
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


    // var el14 = document.querySelector('.header-logo');
    // new Animocon(el14, {
    //   tweens : [
    //     // ring animation
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 750,
    //       type: 'circle',
    //       radius: {0: 40},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {35:0},
    //       opacity: 0.2,
    //       top: '45%',
    //       easing: mojs.easing.bezier(0, 1, 0.5, 1)
    //     }),
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 500,
    //       delay: 100,
    //       type: 'circle',
    //       radius: {0: 20},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {5:0},
    //       opacity: 0.2,
    //       x : 40,
    //       y : -60,
    //       easing: mojs.easing.sin.out
    //     }),
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 500,
    //       delay: 180,
    //       type: 'circle',
    //       radius: {0: 10},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {5:0},
    //       opacity: 0.5,
    //       x: -10,
    //       y: -80,
    //       isRunLess: true,
    //       easing: mojs.easing.sin.out
    //     }),
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 800,
    //       delay: 240,
    //       type: 'circle',
    //       radius: {0: 20},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {5:0},
    //       opacity: 0.3,
    //       x: -70,
    //       y: -10,
    //       easing: mojs.easing.sin.out
    //     }),
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 800,
    //       delay: 240,
    //       type: 'circle',
    //       radius: {0: 20},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {5:0},
    //       opacity: 0.4,
    //       x: 80,
    //       y: -50,
    //       easing: mojs.easing.sin.out
    //     }),
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 1000,
    //       delay: 300,
    //       type: 'circle',
    //       radius: {0: 15},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {5:0},
    //       opacity: 0.2,
    //       x: 20,
    //       y: -100,
    //       easing: mojs.easing.sin.out
    //     }),
    //     new mojs.Shape({
    //       parent: el14,
    //       duration: 600,
    //       delay: 330,
    //       type: 'circle',
    //       radius: {0: 25},
    //       fill: 'transparent',
    //       stroke: '#F35186',
    //       strokeWidth: {5:0},
    //       opacity: 0.4,
    //       x: -40,
    //       y: -90,
    //       easing: mojs.easing.sin.out
    //     }),
    //     // icon scale animation
    //     new mojs.Tween({
    //       duration : 1200,
    //       easing: mojs.easing.ease.out,
    //     })
    //   ]
    // });





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
    

   

}());