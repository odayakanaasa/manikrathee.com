	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	<script>!window.jQuery && document.write(unescape('%3Cscript src="js/libs/jquery-1.5.1.min.js"%3E%3C/script%3E'))</script>
	<script src="js/plugins.js"></script>
	<script src="js/script.js"></script>
	<script type="text/javascript" src="js/css3-mediaqueries.js"></script>
	<!--[if lt IE 7 ]>
	<script src="js/libs/dd_belatedpng.js"></script>
	<script> DD_belatedPNG.fix('img, .png_bg');</script>
	<![endif]-->
	<script src="js/jquery.fittext.js"></script>
	<script src="js/jquery.flexslider.js"></script>
    <script src="js/jquery.backstretch.js"></script>
    <script src="js/prettyForms.js"></script>
    <script src="js/jquery.tipTip.js"></script>
	<script>
		$(window).load(function() {
		   $("#home_title").fitText(0.55);
		   $("h2").fitText(1.2);
		   $("h3").fitText(0.75);
		   $("#fit_mobile_glance").fitText(1.5);
		   $('.flexslider').flexslider();
		 });
	</script>
	<script>
	   	window.addEventListener("load",function() {
	   	  setTimeout(function(){
	   	    window.scrollTo(0, 1);
	   	  }, 0);
	   	});
		
		$(function() {
		    $("#submit").hide();
		    $("#page-changer select").change(function() {
		        window.location = $("#page-changer select option:selected").val();
		    })
			$(".tooltip").tipTip({maxWidth: "auto", edgeOffset: 10});
		});
	</script>
    <script type="text/javascript">
        $(function() {
            $(window).scroll(function(){
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0)
					$('#nav').stop().animate({'opacity':'0.2'},400);
				else	
					$('#nav').stop().animate({'opacity':'1'},400);
			});
				
			$('#nav').hover(
				function (e) {
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 0){
						$('#nav').stop().animate({'opacity':'1'},400);
					}
				},
				function (e) {
					var scrollTop = $(window).scrollTop();
					if(scrollTop != 0){
						$('#nav').stop().animate({'opacity':'0.2'},400);
					}
				}
			);
        });
    </script>
	
	
</body>
</html>