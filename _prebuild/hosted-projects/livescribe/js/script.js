/*globals jQuery, $ */

$(function () {

  // constants, for your tuning pleasure
  var SCROLL_TIME = 500,
    DROPDOWN_TIME = 500,
    DROPDOWN_OFFSET = 100;




  /*
   * A N C H O R   S M O O T H   S C R O L L I N G
   *
   * Animates the window to the top of a named anchor.
   *
   * Expects tags in the form:
   * <a href='#anchor_name'>...</a>
   * ...
   * <a href='#' name="anchor_name">&nbsp;</a>
   *
   * Note that named anchor tags must contain a text node (e.g. &nbsp;)
   * and must have an href attribute for cross-browser compatibility.
   *
   */
  $("a.scroll").click(function (event) {
    event.preventDefault();
    var y, $anchor,
      $e = $(this);

    // get the anchor based on the target's href
    $anchor = $("[name='" + $e.attr("href").replace(/^#/, "") + "']");

    // scroll to the top of the anchor
    y = $anchor.size() > 0 ? $anchor.offset().top : 0;
    $("html,body").animate({ scrollTop: y }, SCROLL_TIME);

  });




  /*
   * L E A R N   M O R E   D R O P D O W N S
   *
   * Slides open a dropdown when you click "Learn More". Repositions
   * the window to make sure the dropdown is visible.
   *
   * Expects a learn more link in the form:
   * <a href='#' class='learn_more' rel='dropdown_id'>...</a>
   * ...
   * <div id='dropdown_id'> ... dropdown content ... </div>
   *
   */
  $(".learn_more").each(function () {
    var t, b, wint, winb, slideHeight, open, close, noProp,
      $e = $(this),
      $dropdown = $("#" + $e.attr("rel"));

    // figure out the visible height of the dropdown
    slideHeight = $dropdown.peek("outerHeight");

    // need to clobber the min-height so we can animate properly
    $dropdown.css("min-height", 0);

    // stop an event from filtering up
    noProp = function (event) {
      if (event) {
        event.stopPropagation();
      }
    };

    // open the dropdown
    open = function (event) {

      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }

      // open the dropdown if it's not already opened
      if (!$e.is(".open")) {
        $e.addClass("open");

        // animate it until it's visible
        $dropdown.show().stop().css({ height: 0 }).animate({ height: slideHeight }, DROPDOWN_TIME);

        // figure out the window and dropdown vertical bounds
        t = $dropdown.size() > 0 ? $dropdown.offset().top : 0;
        b = t + slideHeight;
        wint = $(window).scrollTop();
        winb = wint + $(window).height();

        // close when the document is clicked
        $(document).click(close);

        // clicking the dropdown itself should not cause it to close
        $dropdown.click(noProp);

      }

      // scroll the window so it contains the dropdown, even if it's already open
      if (b + DROPDOWN_OFFSET > winb) {
        $("html,body").animate({ scrollTop: wint + (b - winb) + DROPDOWN_OFFSET }, DROPDOWN_TIME);
      } else if (t - DROPDOWN_OFFSET < wint) {
        $("html,body").animate({ scrollTop: t - DROPDOWN_OFFSET }, DROPDOWN_TIME);
      }

      // scroll the window so it's a fixed amount above the top of the dropdown
      // $("html,body").animate({ scrollTop: t - DROPDOWN_OFFSET }, DROPDOWN_TIME);

      // center the window on the dropdown 
      // $("html,body").animate({ scrollTop: t - ($(window).height() - slideHeight) / 2 }, DROPDOWN_TIME);
    

    };

    // animate the dropdown closed
    close = function (event) {
      event.preventDefault();
      $(document).unbind("click", close);
      $dropdown.unbind("click", noProp);
      $e.removeClass("open");
      $dropdown.stop().css({ height: slideHeight });
      $dropdown.animate({ height: 0 }, DROPDOWN_TIME, function () {
        $(this).hide();
      });
    };

    // open when "Learn More" is clicked
    $e.click(open);

    // close when "Close" is clicked
    $dropdown.find(".close").click(close);

  });




});

