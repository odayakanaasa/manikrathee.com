$(function(e){
  var footer = $('#main-footer');
  var randomIndexUsed = [];
  var counter = 0;
  var numberOfPosts = 1;

  while (counter < numberOfPosts) {
    var randomIndex;
    var post_HREF;
    var post_Title;
    var post_Image;

    randomIndex = Math.floor(Math.random() * postURL.length);

    if (randomIndexUsed.indexOf(randomIndex) == "-1") {
      post_HREF = postURL[randomIndex];
      post_Title = postTitle[randomIndex];
      post_Image = postTitle[randomIndex];

      if (counter == (numberOfPosts - 1)) {
        footer.append('<p><a href="' + post_HREF + '">' + post_Title + '</a><img src="/img/blog/' + post_Image + '/feature.jpg"></p>');
        console.log('<p><a href="' + post_HREF + '">' + post_Title + '</a><img src="/img/blog/' + post_Image + '/feature.jpg"></p>');
      }
      else {
        footer.append('<p><a href="' + post_HREF + '">' + post_Title + '</a><img src="/img/blog/' + post_Image + '/feature.jpg"></p>');
        console.log('<p><a href="' + post_HREF + '">' + post_Title + '</a><img src="/img/blog/' + post_Image + '/feature.jpg"></p>');
      }

      randomIndexUsed.push(randomIndex);

      counter++;
    }
  }
});
