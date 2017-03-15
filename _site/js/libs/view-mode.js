;(function () {
// View Mode Toggle

  var viewModeContainer = document.getElementById('view-mode--container');
  var viewModeToggle    = document.getElementById('view-mode--toggle');
  

  var viewMode = {
    // TODO set & eval a cookie to remember this value

    init: function() {
      this.addEventListeners();
    },

    addEventListeners: function() {
      var _this = this;

      viewModeToggle.addEventListener('click', function() {
        _this.eval();
      });
    },

    eval: function() {
      var activeMode = document.getElementById('view-mode--toggle').checked;

      if ( activeMode === true ? this.darkMode() : this.lightMode() );
    },

    darkMode: function() {
      document.body.classList.add('view-mode--dark');
    },

    lightMode: function() {
      document.body.classList.remove('view-mode--dark');
    },
  }

  viewMode.init();
}());