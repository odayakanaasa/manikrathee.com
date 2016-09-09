$(function(e){
  var imageContainer = $('.footer-bg-photo-posts');
  var randomIndex = Math.floor(Math.random() * postURL.length);
  var img = postImage[randomIndex];
  var completePath = "/img/photos/" + img;

  imageContainer.css('background-image', 'url(' + completePath + ')');
});

