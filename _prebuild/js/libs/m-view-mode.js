// View Mode Toggle

var
    viewModeContainer    = $('#view-mode')
  , viewModeToggle       = $('#view-mode--toggle')
  , viewModeLight        = $('#view-mode--light')
  , viewModeDark         = $('#view-mode--dark')
  , viewModeToggleButton = $('.view-mode--toggle-button')
  ;

var viewMode = {

  // TODO set & eval a cookie to remember this value

  init: function() {
    this.addEventListeners();
  },

  addEventListeners: function() {
    var _this = this;
    viewModeToggleButton.on('click', function() {
      _this.eval();
    });
  },

  eval: function() {
    var activeMode = viewModeToggle.find( $('input[type=radio]:checked') ).attr('id');

    if ( activeMode === 'view-mode--light' ) {
      this.lightMode();
    } else {
      this.darkMode();
    }
  },

  darkMode: function() {
    $body.addClass('view-mode--dark');
  },

  lightMode: function() {
    $body.removeClass('view-mode--dark');
  },
}

viewMode.init();
