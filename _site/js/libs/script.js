
//Social API Vars
var twitterAPI = $('#twitter');
var instagramAPI = $('#instagram');
var rdioAPI = $('#rdio');
var readmillAPI = $('#readmill');
var twitterID = twitterAPI.prop('id');
var instagramID = instagramAPI.prop('id');
var rdioID = instagramAPI.prop('id');
var readmillID = readmillAPI.prop('id');

$('#readmill').prepend('<div><p id="readmill-book">Currently Reading: A Pocket Guide to International User Research by Chui Chui Tan</p></div>');

LastFMStatus.init({
    username: "mrathee"
});

// This adds the logo spans which are targetted with symbolset. It is called in api.twitter.js after twitter.html();
function logofyAPI(){
  setTimeout(function(){
    if (instagramActive){
      $(".social-api").prepend('<span class="ss-icon ss-social logo"></span>');
      twitterAPI.find('span.logo').prepend(twitterID);
      instagramAPI.find('span.logo').prepend(instagramID);
      // rdioAPI.find('span.logo').prepend(rdioID);
      readmillAPI.find('span.logo').prepend(readmillID);
      centerAPI();
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
			$('#current, .copy, .dark-shade').addClass('fade');
		}, function(){
			$('#current, .copy, .dark-shade').removeClass('fade');
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

navHook.click(function(e) {
	e.preventDefault();
	e.stopPropagation();
	if (body.hasClass('nav')) {
    body.removeClass('nav');
 	} else {
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
// konami = new Konami()
// konami.code = function() {
//     $('body').addClass('konami');
// }
// konami.load()

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
var countNumberValue;
function startCount() {
  $('.count').each(function() {
    countNumberValue = $(this).attr('data-number');
    $(this).countTo({
        from: 0,
        to: countNumberValue,
        speed: 1400,
        refreshInterval: 5,
        onComplete: function(value) {
            // console.debug(this);
        }
    });
  });
}
// startCount();

var eventsFired = 0;
$(window).scroll(function() {
  var elem = $('#about-data');
  withinViewport(elem);
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
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-3', 'auto');
ga('send', 'pageview');

