//@codekit-prepend "libs/jquery-1.8.2.min.js";
//@codekit-prepend "libs/jquery.backstretch.js";
//@codekit-prepend "libs/jquery.fittext.js";
//@codekit-prepend "libs/jquery.flexslider.js";
//@codekit-prepend "libs/jquery.api.instagram.js";
//@codekit-prepend "libs/jquery.api.twitter.js";
//@codekit-prepend "libs/jquery.twitter.js";
//@codekit-prepend "libs/jquery.prettyForms.js";
//@codekit-prepend "libs/jquery.tipTip.js";
//@codekit-prepend "libs/jhere.js";
//@codekit-prepend "libs/konami.js";

// "libs/ss-social.js", "libs/ss-standard.js", "libs/jquery.lettering.js", "libs/jquery.api.rdio.js"

//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = $('#twitter').prop('id');
var instagramID = $('#instagram').prop('id');
var rdioID = $('#rdio').prop('id');
var readmillID = $('#readmill').prop('id');

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
    setTimeout(function(){
        if (instagramActive = true){
        	$(".social-api").prepend('<span class="ss-icon logo"></span>');
        	twitterAPI.find('span.logo').prepend(twitterID);
        	instagramAPI.find('span.logo').prepend(instagramID);
        	rdioAPI.find('span.logo').prepend(rdioID);
        	readmillAPI.find('span.logo').prepend(readmillID);
        	activateAPI();
        }
        else{
        	return;
        }
    }, 1000);
 }
 
 // Callback function for after API js has run to display the API containers
 function activateAPI(){
 	$('.social-api').addClass("run");
	$(".social-api").delay(4500).queue(function(next){
		$(this).addClass('inactive');
		next();
	});
 }

// Nav Hover
function checkWidth() {
	if ($(window).width() > 769){
		$('#portfolio').hover(function(){
			$('.copy').addClass('fade');
			$('#current').addClass('fade');
		}, function(){
			$('.copy').removeClass('fade');
			$('#current').removeClass('fade');
		});
		// TipTip
		$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
	}
	else{
		$('.copy').removeClass('fade');
	}
};

$(window).resize(function() {
	checkWidth();
});
checkWidth();


// Mobile Nav
var navHook = $('#nav');
var navMenu = $('#navigation');

navHook.click(function(e){
	e.preventDefault();
	e.stopPropagation();
	if (navMenu.hasClass('show')){
	   navMenu.removeClass('show');
   	}
   	else{
		navMenu.addClass('show');
   	}
});

navMenu.click(function(e){
	e.stopPropagation();
});

$(document).click(function() {
   if (navMenu.hasClass('show')){
	   navMenu.removeClass('show');
   }
});


// Rdio API
// R.ready(function() {
// 	R.request({
// 		method: "getTopCharts",
// 		content: {
// 		type: "Track", 
// 		start: 0, 
// 		count: 1
// 		},
// 		success: function(response) {
// 			var top = response.result[0];
// 			console.log(top.name + " by " + top.artist);
// 		},
// 		error: function(response) {
// 			console.log("error");
// 		}
// 	});
// });

// Konami Code
konami = new Konami()
konami.code = function() {
    $('body').addClass('konami');
}

konami.load()


//Slider
$('.flexslider').flexslider();


// TipTip
$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});


// ScrollTop Function
var toTop = $('#top');
toTop.click(function(e) {
	e.preventDefault();
	$('body,html').animate({scrollTop:0},800);
});	


//FitText
// $(".interior h2").fitText(1.2);
$('.interior h3').fitText(1.3);
$('.fit').fitText(1.2);
$('.fit-light').fitText(0.8);


//Counter
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

var numberOne = $('#about-data').find('#number-one');
var numberOneValue = numberOne.text();
var numberTwo = $('#about-data').find('#number-two');
var numberTwoValue = numberTwo.text();
var numberThree = $('#about-data').find('#number-three');
var numberThreeValue = numberThree.text();
var numberFour = $('#about-data').find('#number-four');
var numberFourValue = numberFour.text();
var numberFive = $('#about-data').find('#number-five');
var numberFiveValue = numberFive.text();
var numberSix = $('#about-data').find('#number-six');
var numberSixValue = numberSix.text();

// jQuery(function($) {
//     numberOne.countTo({
//         from: 0,
//         to: 2500,
//         speed: 500,
//         refreshInterval: 50,
//         onComplete: function(value) {
//             console.debug(this);
//         }
//     });
// });


function startCount() {
	numberOne.countTo({
	    from: 0,
	    to: numberOneValue,
	    speed: 2000,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        console.debug(this);
	    }
	});
	
	numberTwo.countTo({
	    from: 0,
	    to: numberTwoValue,
	    speed: 2000,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        console.debug(this);
	    }
	});
	
	numberThree.countTo({
	    from: 0,
	    to: numberThreeValue,
	    speed: 2000,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        console.debug(this);
	    }
	});
	
	numberFour.countTo({
	    from: 0,
	    to: numberFourValue,
	    speed: 2000,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        console.debug(this);
	    }
	});
	
	numberFive.countTo({
	    from: 0,
	    to: numberFiveValue,
	    speed: 2000,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        console.debug(this);
	    }
	});
	
	numberSix.countTo({
	    from: 0,
	    to: numberSixValue,
	    speed: 2000,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        console.debug(this);
	    }
	});
}

startCount();


// Twitter Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
 
 
 // Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19400273-3']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// jHere - Maps
$('.selector').jHERE({
    enable: [], //An array of components as strings.
    zoom: 12, //a positive integer.
    center: []|{}, //An object of type {latitude: Number, longitude: Number}
                    //or array [latitude, longitude],
    type: 'map', //can be map (the default), satellite, terrain, smart, pt.
                  //see type documentation below for details.
    appId: 'kWWUmJFcPYJoF6ayltNy', //appId from the Nokia developer website,
    authToken: 'VPzI9NANqQaOHgaNF5li1g' //authenticationToken from the
                                         //Nokia developer website
});