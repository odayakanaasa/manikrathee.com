//@codekit-prepend "libs/jquery-1.8.2.min.js";

//@codekit-prepend "libs/jquery.backstretch.js";
//@codekit-prepend "libs/jquery.api.rdio.js";
//@codekit-prepend "libs/jquery.api.twitter.js";
//@codekit-prepend "libs/jquery.api.instagram.js";
//@codekit-prepend "libs/jquery.twitter.js";

//@codekit-prepend "libs/jquery.fittext.js";
//@codekit-prepend "libs/jquery.flexslider.js";
//@codekit-prepend "libs/jquery.prettyForms.js";
//@codekit-prepend "libs/jquery.counter.js";
//@codekit-prepend "libs/jquery.tipTip.js";
//@codekit-prepend "libs/konami.js";
//@codekit-prepend "libs/withinViewport.js";
//@codekit-prepend "libs/jquery.withinViewport.js";

// "libs/ss-social.js", "libs/ss-standard.js", "libs/jquery.lettering.js", "libs/jhere.js";

//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = $('#twitter').prop('id');
var instagramID = $('#instagram').prop('id');
var rdioID = $('#rdio').prop('id');
var readmillID = $('#readmill').prop('id');

$('#readmill').prepend('<div><p id="readmill-book">Currently Reading: <a href="https://readmill.com/manikrathee/reads/these-days" title="These Days - Jack Cheng">These Days</a></p></div>');

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
    setTimeout(function(){
        if (instagramActive){
        	$(".social-api").prepend('<span class="ss-icon logo"></span>');
        	twitterAPI.find('span.logo').prepend(twitterID);
        	instagramAPI.find('span.logo').prepend(instagramID);
        	// rdioAPI.find('span.logo').prepend(rdioID);
        	readmillAPI.find('span.logo').prepend(readmillID);
        	// centerAPI();
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

function centerAPI(){
    var socialAPI = $('.social-api');
    
    if ($(window).width() > 768){ 
        $(socialAPI).each(function() {
            var center = $(this).find('div');
            var h = center.height();
            center.css('margin-top', + h / -2 + 'px');
        });
    }
}

$(window).resize(function() {
    centerAPI();
});

centerAPI();



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
var body = $('body');

navHook.click(function(e){
	e.preventDefault();
	e.stopPropagation();
	if (body.hasClass('nav')){
	   body.removeClass('nav');
   	}
   	else{
		body.addClass('nav');
   	}
});

navMenu.click(function(e){
	e.stopPropagation();
});

$(document).click(function() {
   if (body.hasClass('nav')){
	   body.removeClass('nav');
   }
});





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
var numberOne = $('#number-one');
var numberOneValue = numberOne.attr('data-number');
var numberTwo = $('#number-two');
var numberTwoValue = numberTwo.attr('data-number');
var numberThree = $('#number-three');
var numberThreeValue = numberThree.attr('data-number');
var numberFour = $('#number-four');
var numberFourValue = numberFour.attr('data-number');
var numberFive = $('#number-five');
var numberFiveValue = numberFive.attr('data-number');
var numberSix = $('#number-six');
var numberSixValue = numberSix.attr('data-number');


function startCount() {
	numberOne.countTo({
	    from: 0,
	    to: numberOneValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberTwo.countTo({
	    from: 0,
	    to: numberTwoValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberThree.countTo({
	    from: 0,
	    to: numberThreeValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberFour.countTo({
	    from: 0,
	    to: numberFourValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberFive.countTo({
	    from: 0,
	    to: numberFiveValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
	
	numberSix.countTo({
	    from: 0,
	    to: numberSixValue,
	    speed: 1400,
	    refreshInterval: 5,
	    onComplete: function(value) {
	        // console.debug(this);
	    }
	});
}

// startCount();

var eventsFired = 0;

$(window).scroll(function() {
    if ($("#about-data").is(":within-viewport")){
		if (eventsFired == 0) {
    		startCount();
    		eventsFired++;
    	}
    }
});



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
