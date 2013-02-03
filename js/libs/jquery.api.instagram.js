var instagramFeed = new function() {
  var instagramActive = false;
    
  this.endpoint = 'instagram.me';

  this.render_html = function(data, options) {
    var str = "";

    for(i in data) {
      var photo = data[i];
      // console.log(photo);
      str += "<div class='photo' data='" + photo.id + "'>";
      // str += "<p>Latest Photo:" + photo.created_time + "</p>";
      str += "<a id='instagram-link' href='" + photo.link + "' title='View my latest Instagram Shot'>My latest instagram: '" + photo.caption.text + "'";
      // str += "<img src='" + photo.images.thumbnail.url + "' />";
      str += "</a>";
      str += "</div>";
    }

    return str;
  }

  this.render = function(container, data) {
    var obj = document.getElementById(container);
    var buffer = this.render_html(data);
    obj.innerHTML = buffer;
  }

  this.embed = function(options) {
    var css_url = "http://" + this.endpoint + "/stylesheets/feed.css";
    var url = "http://" + this.endpoint + "/feed.json?";
    url += "user=" + options.username;
    url += "&callback=instagramFeed.render";
    url += "&callback_container=" + options.container;

    if (options.count) {
      url += "&count=" + options.count;
    }
    
    var script = "<script type='text/javascript' src='" + url + "'></script>";

    document.write(script);
  
  }
  
  // Set instagramActive to true so logofyAPI and activate API can fire
  instagramActive = true;
}

// Instagram API
instagramFeed.embed({
  username: 'manikrathee',
  count: 1,
  container: 'instagram'
});