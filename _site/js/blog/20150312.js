/*
 * 20150312.js
 *
 */

$(document).ready(function() {
  var body = $('body');
  var modalName;

  $('a.modal-trigger').click(function(e){
    e.preventDefault();
    modalName = $(this).attr('data-modal');
    body.addClass(modalName);
  });

  $('.close').click(function(){
    body.removeClass(modalName);
  });

  $(document).click(function(){
    body.removeClass(modalName);
  });

  $('.modal > *').click(function(e){
    e.preventDefault();
    e.stopPropagation();
  });

});
