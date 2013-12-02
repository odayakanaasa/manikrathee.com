<html>
<head>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<link rel="stylesheet" href="style.css">


<!-- 
DEFAULT CODE
<script type="text/javascript">
$(document).ready(function() {
	$.getJSON('http://search.twitter.com/search.json?q=earthquake&lang=en&callback=?', function(data) {
		var data = data.results;
		var html = "<ul>";	
		for(var i=0; i<data.length; i++) {
	    	html += "<li><a href='http://twitter.com/" + data[i].from_user + "'>@" 
                      + data[i].from_user + "</a>: " + data[i].text + "</li>";
		}
		html += "</ul>"
    	$('.content').html(html);
	});
});
</script> -->
 
<!-- 
readmill - not functioning yet
<script type="text/javascript">
$(document).ready(function() {
	$.getJSON('https://api.readmill.com/users/2?client_id=CLIENTID&callback=?', function(data) {
		
		var html = "<ul>";	
		for(var i=0; i<data.length; i++) {
	    	html += "<li> ' " + data[i].username + " ' - " + data[i].books_open + data[i].readings + "</li>";
		}
		html += "</ul>"
    	$('.content').html(html);
	});
});
</script> -->

<!-- instagram
<script type="text/javascript">
$(document).ready(function() {
	$.getJSON('http://instagram.me/feed.json?user=manikrathee&callback=?', function(data) {
		
		var html = "<ul>";	
		for(var i=0; i<data.length; i++) {
	    	html += "<li> ' " + data[i].count + " ' - " + data[i].link + data[i].id + data[i].images + "</li>";
		}
		html += "</ul>"
    	$('.content').html(html);
	});
});
</script> -->


</head>
<body>
<h2>API</h2>

<!-- <div id="unstyled">
	<div id="twitter" class="twitter">Icon - </div>
	<div id="instagram" class="instagram">Icon - </div>
</div> -->


<div id="twitter" class="social-api twitter"></div>
<div id="instagram" class="social-api instagram"></p></div>
<div id="rdio" class="social-api rdio">rdio icon</div>
<div id="readmill" class="social-api readmill">readmill icon</p></div>


<script src="instagram-ck.js"></script>
<script type="text/javascript">
//Twitter Call
$(document).ready(function() {
	$.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=manikrathee&count=1&callback=?', function(data) {
		
		var html = "<ul>";
		var twitter = $('.twitter');
		
		for(var i=0; i<data.length; i++) {
			
			// create URLs and link @Mentions
			var status = data[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
			      return '<a href="'+url+'">'+url+'</a>';
			    }).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
			      return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
			    });
			
			// set relative time - function source by Alex Hedley
			var time_value = data[i].created_at
	        var relative = '';
			
			function relative_time(time_value) {
		        var values = time_value.split(" ");
		        time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
		        var parsed_date = Date.parse(time_value);
		        var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
		        var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
		        delta = delta + (relative_to.getTimezoneOffset() * 60);
 
		        if (delta < 60) {
		            relative = 'a minute ago';
		        } else if (delta < 120) {
		            relative = 'couple of minutes ago';
		        } else if (delta < (45 * 60)) {
		            relative = (parseInt(delta / 60)).toString() + ' minutes ago';
		        } else if (delta < (90 * 60)) {
		            relative = 'an hour ago';
		        } else if (delta < (24 * 60 * 60)) {
		            relative = '' + (parseInt(delta / 3600)).toString() + ' hours ago';
		        } else if (delta < (48 * 60 * 60)) {
		            relative = '1 day ago';
		        } else {
		            relative = (parseInt(delta / 86400)).toString() + ' days ago';
		        }

		        return relative;
		    }
			// Run relative time and apply var
			relative_time(time_value);
			
			// Concatenate tweet and add linked relative time
	    	html += "<li> ' " + status + ' - <a href="http://www.twitter.com/manikrathee/statuses/' + data[i].id_str + '" title="View this Tweet on Twitter.com">' + relative + "</a></span></li>";
		}
		html += "</ul>"
		
		// Spit out the final product
    	twitter.html(html);
	});
});

//Instagram Call
instagramFeed.embed({
  username: 'manikrathee',
  count: 1,
  container: 'instagram'
});

$(".social-api").delay(4500).queue(function(next){
    $(this).addClass('inactive');
    next();
});

</script>




</body>
</html>