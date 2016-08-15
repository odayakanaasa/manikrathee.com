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
    console.log('init');
    this.addEventListeners();
  },

  addEventListeners: function() {
    console.log('event listeners');
    var _this = this;
    viewModeToggleButton.on('click', function() {
      _this.eval();
    });
  },

  eval: function() {
    console.log('eval');
    var activeMode = viewModeToggle.find( $('input[type=radio]:checked') ).attr('id');

    console.log(activeMode);

    if ( activeMode === 'view-mode--light' ) {
      this.lightMode();
    } else {
      this.darkMode();
    }
  },

  darkMode: function() {
    console.log('dark mode ran');
    $body.addClass('view-mode--dark');
  },

  lightMode: function() {
    console.log('light mode ran');
    $body.removeClass('view-mode--dark');
  },
}

viewMode.init();
