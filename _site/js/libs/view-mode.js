// ;(function () {
// View Mode Toggle

  var viewModeContainer = document.getElementById('view-mode--container');
  var viewModeToggle    = document.getElementById('view-mode--toggle');


  var viewMode = {

    init: function() {
      // this.onLoadCheck();
      this.addEventListeners();
    },

    addEventListeners: function() {
      var _this = this;

      viewModeToggle.addEventListener('click', function() {
        _this.eval();
      });
    },

    onLoadCheck: function() {
      var currentViewMode = Cookies.get('mrViewMode');

      if (currentViewMode === 'dark') {
        viewMode.darkMode();
      } else {
        viewMode.lightMode();
      }
    },

    eval: function() {
      var activeMode = document.body.classList.contains('view-mode--dark');

      if ( activeMode === true ? this.lightMode() : this.darkMode() );
    },

    darkMode: function() {
      document.body.classList.add('view-mode--dark');
      Cookies.set('mrViewMode', 'dark');
    },

    lightMode: function() {
      document.body.classList.remove('view-mode--dark');
      Cookies.set('mrViewMode', 'light');
    },
  }

  viewMode.init();

// }());

