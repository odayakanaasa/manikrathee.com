/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

	// Enable strict mode
	"use strict";

	w.picturefill = function() {
		var ps = w.document.getElementsByTagName( "div" );

		// Loop the pictures
		for( var i = 0, il = ps.length; i < il; i++ ){
			if( ps[ i ].getAttribute( "data-picture" ) !== null ){

				var sources = ps[ i ].getElementsByTagName( "div" ),
					matches = [];

				// See if which sources match
				for( var j = 0, jl = sources.length; j < jl; j++ ){
					var media = sources[ j ].getAttribute( "data-media" );
					// if there's no media specified, OR w.matchMedia is supported
					if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
						matches.push( sources[ j ] );
					}
				}

			// Find any existing img element in the picture element
			var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

			if( matches.length ){
				if( !picImg ){
					picImg = w.document.createElement( "img" );
					picImg.alt = ps[ i ].getAttribute( "data-alt" );
					ps[ i ].appendChild( picImg );
				}

				picImg.src =  matches.pop().getAttribute( "data-src" );
			}
			else if( picImg ){
				ps[ i ].removeChild( picImg );
			}
		}
		}
	};

	// Run on resize and domready (w.load as a fallback)
	if( w.addEventListener ){
		w.addEventListener( "resize", w.picturefill, false );
		w.addEventListener( "DOMContentLoaded", function(){
			w.picturefill();
			// Run once only
			w.removeEventListener( "load", w.picturefill, false );
		}, false );
		w.addEventListener( "load", w.picturefill, false );
	}
	else if( w.attachEvent ){
		w.attachEvent( "onload", w.picturefill );
	}

}( this ));;/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null
        };

        function update() {
            var counter = 0;

            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function(event) {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            $self
                                .hide()
                                .attr("src", $self.data(settings.data_attribute))
                                [settings.effect](settings.effect_speed);
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function(event) {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function(event) {
            update();
        });

        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(window).load(function() {
            update();
        });

        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.height() + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };

    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };

    $.abovethetop = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };

    $.leftofbegin = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[':'], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);;/*!
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
(function($){
  function injector(t, splitter, klass, after) {
    var a = t.text().split(splitter), inject = '';
    if (a.length) {
      $(a).each(function(i, item) {
        inject += '<span class="'+klass+(i+1)+'">'+item+'</span>'+after;
      });
      t.empty().append(inject);
    }
  }

  var methods = {
    init : function() {

      return this.each(function() {
        injector($(this), '', 'char', '');
      });

    },

    words : function() {

      return this.each(function() {
        injector($(this), ' ', 'word', ' ');
      });

    },

    lines : function() {

      return this.each(function() {
        var r = "eefec303079ad17405c889e092e105b0";
        // Because it's hard to split a <br/> tag consistently across browsers,
        // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash
        // (of the word "split").  If you're trying to use this plugin on that
        // md5 hash string, it will fail because you're being ridiculous.
        injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
      });

    }
  };

  $.fn.lettering = function( method ) {
    // Method calling logic
    if ( method && methods[method] ) {
      return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
    } else if ( method === 'letters' || ! method ) {
      return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
    }
    $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
    return this;
  };

})(jQuery);;/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize orientationchange', resizer);

    });

  };

})( jQuery );;/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if(!document.getElementById('fit-vids-style')) {

      var div = document.createElement('div'),
          ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0],
          cssStyles = '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>';

      div.className = 'fit-vids-style';
      div.id = 'fit-vids-style';
      div.style.display = 'none';
      div.innerHTML = cssStyles;

      ref.parentNode.insertBefore(div,ref);

    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
;/*
Syntax highlighting with language autodetection.
http://softwaremaniacs.org/soft/highlight/
*/

(function($, window, document, undefined) {
  /* Utility functions */

  function escape(value) {
    return value.replace(/&/gm, '&amp;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;');
  }

  function findCode(pre) {
    for (var node = pre.firstChild; node; node = node.nextSibling) {
      if (node.nodeName == 'CODE')
        return node;
      if (!(node.nodeType == 3 && node.nodeValue.match(/\s+/)))
        break;
    }
  }

  function blockText(block, ignoreNewLines) {
    return Array.prototype.map.call(block.childNodes, function(node) {
      if (node.nodeType == 3) {
        return ignoreNewLines ? node.nodeValue.replace(/\n/g, '') : node.nodeValue;
      }
      if (node.nodeName == 'BR') {
        return '\n';
      }
      return blockText(node, ignoreNewLines);
    }).join('');
  }

  function blockLanguage(block) {
    var classes = (block.className + ' ' + (block.parentNode ? block.parentNode.className : '')).split(/\s+/);
    classes = classes.map(function(c) {return c.replace(/^language-/, '')});
    for (var i = 0; i < classes.length; i++) {
      if (languages[classes[i]] || classes[i] == 'no-highlight') {
        return classes[i];
      }
    }
  }

  /* Stream merging */

  function nodeStream(node) {
    var result = [];
    (function _nodeStream(node, offset) {
      for (var child = node.firstChild; child; child = child.nextSibling) {
        if (child.nodeType == 3)
          offset += child.nodeValue.length;
        else if (child.nodeName == 'BR')
          offset += 1;
        else if (child.nodeType == 1) {
          result.push({
            event: 'start',
            offset: offset,
            node: child
          });
          offset = _nodeStream(child, offset);
          result.push({
            event: 'stop',
            offset: offset,
            node: child
          });
        }
      }
      return offset;
    })(node, 0);
    return result;
  }

  function mergeStreams(stream1, stream2, value) {
    var processed = 0;
    var result = '';
    var nodeStack = [];

    function selectStream() {
      if (stream1.length && stream2.length) {
        if (stream1[0].offset != stream2[0].offset)
          return (stream1[0].offset < stream2[0].offset) ? stream1 : stream2;
        else {
          /*
          To avoid starting the stream just before it should stop the order is
          ensured that stream1 always starts first and closes last:

          if (event1 == 'start' && event2 == 'start')
            return stream1;
          if (event1 == 'start' && event2 == 'stop')
            return stream2;
          if (event1 == 'stop' && event2 == 'start')
            return stream1;
          if (event1 == 'stop' && event2 == 'stop')
            return stream2;

          ... which is collapsed to:
          */
          return stream2[0].event == 'start' ? stream1 : stream2;
        }
      } else {
        return stream1.length ? stream1 : stream2;
      }
    }

    function open(node) {
      function attr_str(a) {return ' ' + a.nodeName + '="' + escape(a.value) + '"'};
      return '<' + node.nodeName + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';
    }

    while (stream1.length || stream2.length) {
      var current = selectStream().splice(0, 1)[0];
      result += escape(value.substr(processed, current.offset - processed));
      processed = current.offset;
      if ( current.event == 'start') {
        result += open(current.node);
        nodeStack.push(current.node);
      } else if (current.event == 'stop') {
        var node, i = nodeStack.length;
        do {
          i--;
          node = nodeStack[i];
          result += ('</' + node.nodeName.toLowerCase() + '>');
        } while (node != current.node);
        nodeStack.splice(i, 1);
        while (i < nodeStack.length) {
          result += open(nodeStack[i]);
          i++;
        }
      }
    }
    return result + escape(value.substr(processed));
  }

  /* Initialization */

  function compileLanguage(language) {

    function reStr(re) {
        return (re && re.source) || re;
    }

    function langRe(value, global) {
      return RegExp(
        reStr(value),
        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')
      );
    }

    function compileMode(mode, parent) {
      if (mode.compiled)
        return;
      mode.compiled = true;

      var keywords = []; // used later with beginWithKeyword but filled as a side-effect of keywords compilation
      if (mode.keywords) {
        var compiled_keywords = {};

        function flatten(className, str) {
          str.split(' ').forEach(function(kw) {
            var pair = kw.split('|');
            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];
            keywords.push(pair[0]);
          });
        }

        mode.lexemsRe = langRe(mode.lexems || hljs.IDENT_RE + '(?!\\.)', true);
        if (typeof mode.keywords == 'string') { // string
          flatten('keyword', mode.keywords)
        } else {
          for (var className in mode.keywords) {
            if (!mode.keywords.hasOwnProperty(className))
              continue;
            flatten(className, mode.keywords[className]);
          }
        }
        mode.keywords = compiled_keywords;
      }
      if (parent) {
        if (mode.beginWithKeyword) {
          mode.begin = '\\b(' + keywords.join('|') + ')\\b(?!\\.)\\s*';
        }
        mode.beginRe = langRe(mode.begin ? mode.begin : '\\B|\\b');
        if (!mode.end && !mode.endsWithParent)
          mode.end = '\\B|\\b';
        if (mode.end)
          mode.endRe = langRe(mode.end);
        mode.terminator_end = reStr(mode.end) || '';
        if (mode.endsWithParent && parent.terminator_end)
          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;
      }
      if (mode.illegal)
        mode.illegalRe = langRe(mode.illegal);
      if (mode.relevance === undefined)
        mode.relevance = 1;
      if (!mode.contains) {
        mode.contains = [];
      }
      for (var i = 0; i < mode.contains.length; i++) {
        if (mode.contains[i] == 'self') {
          mode.contains[i] = mode;
        }
        compileMode(mode.contains[i], mode);
      }
      if (mode.starts) {
        compileMode(mode.starts, parent);
      }

      var terminators = [];
      for (var i = 0; i < mode.contains.length; i++) {
        terminators.push(reStr(mode.contains[i].begin));
      }
      if (mode.terminator_end) {
        terminators.push(reStr(mode.terminator_end));
      }
      if (mode.illegal) {
        terminators.push(reStr(mode.illegal));
      }
      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(s) {return null;}};
    }

    compileMode(language);
  }

  /*
  Core highlighting function. Accepts a language name and a string with the
  code to highlight. Returns an object with the following properties:

  - relevance (int)
  - keyword_count (int)
  - value (an HTML string with highlighting markup)

  */
  function highlight(language_name, value, ignore_illegals) {

    function subMode(lexem, mode) {
      for (var i = 0; i < mode.contains.length; i++) {
        var match = mode.contains[i].beginRe.exec(lexem);
        if (match && match.index == 0) {
          return mode.contains[i];
        }
      }
    }

    function endOfMode(mode, lexem) {
      if (mode.end && mode.endRe.test(lexem)) {
        return mode;
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, lexem);
      }
    }

    function isIllegal(lexem, mode) {
      return !ignore_illegals && mode.illegal && mode.illegalRe.test(lexem);
    }

    function keywordMatch(mode, match) {
      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];
      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];
    }

    function processKeywords() {
      var buffer = escape(mode_buffer);
      if (!top.keywords)
        return buffer;
      var result = '';
      var last_index = 0;
      top.lexemsRe.lastIndex = 0;
      var match = top.lexemsRe.exec(buffer);
      while (match) {
        result += buffer.substr(last_index, match.index - last_index);
        var keyword_match = keywordMatch(top, match);
        if (keyword_match) {
          keyword_count += keyword_match[1];
          result += '<span class="'+ keyword_match[0] +'">' + match[0] + '</span>';
        } else {
          result += match[0];
        }
        last_index = top.lexemsRe.lastIndex;
        match = top.lexemsRe.exec(buffer);
      }
      return result + buffer.substr(last_index);
    }

    function processSubLanguage() {
      if (top.subLanguage && !languages[top.subLanguage]) {
        return escape(mode_buffer);
      }
      var result = top.subLanguage ? highlight(top.subLanguage, mode_buffer) : highlightAuto(mode_buffer);
      // Counting embedded language score towards the host language may be disabled
      // with zeroing the containing mode relevance. Usecase in point is Markdown that
      // allows XML everywhere and makes every XML snippet to have a much larger Markdown
      // score.
      if (top.relevance > 0) {
        keyword_count += result.keyword_count;
        relevance += result.relevance;
      }
      return '<span class="' + result.language  + '">' + result.value + '</span>';
    }

    function processBuffer() {
      return top.subLanguage !== undefined ? processSubLanguage() : processKeywords();
    }

    function startNewMode(mode, lexem) {
      var markup = mode.className? '<span class="' + mode.className + '">': '';
      if (mode.returnBegin) {
        result += markup;
        mode_buffer = '';
      } else if (mode.excludeBegin) {
        result += escape(lexem) + markup;
        mode_buffer = '';
      } else {
        result += markup;
        mode_buffer = lexem;
      }
      top = Object.create(mode, {parent: {value: top}});
    }

    function processLexem(buffer, lexem) {
      mode_buffer += buffer;
      if (lexem === undefined) {
        result += processBuffer();
        return 0;
      }

      var new_mode = subMode(lexem, top);
      if (new_mode) {
        result += processBuffer();
        startNewMode(new_mode, lexem);
        return new_mode.returnBegin ? 0 : lexem.length;
      }

      var end_mode = endOfMode(top, lexem);
      if (end_mode) {
        var origin = top;
        if (!(origin.returnEnd || origin.excludeEnd)) {
          mode_buffer += lexem;
        }
        result += processBuffer();
        do {
          if (top.className) {
            result += '</span>';
          }
          relevance += top.relevance;
          top = top.parent;
        } while (top != end_mode.parent);
        if (origin.excludeEnd) {
          result += escape(lexem);
        }
        mode_buffer = '';
        if (end_mode.starts) {
          startNewMode(end_mode.starts, '');
        }
        return origin.returnEnd ? 0 : lexem.length;
      }

      if (isIllegal(lexem, top))
        throw new Error('Illegal lexem "' + lexem + '" for mode "' + (top.className || '<unnamed>') + '"');

      /*
      Parser should not reach this point as all types of lexems should be caught
      earlier, but if it does due to some bug make sure it advances at least one
      character forward to prevent infinite looping.
      */
      mode_buffer += lexem;
      return lexem.length || 1;
    }

    var language = languages[language_name];
    compileLanguage(language);
    var top = language;
    var mode_buffer = '';
    var relevance = 0;
    var keyword_count = 0;
    var result = '';
    try {
      var match, count, index = 0;
      while (true) {
        top.terminators.lastIndex = index;
        match = top.terminators.exec(value);
        if (!match)
          break;
        count = processLexem(value.substr(index, match.index - index), match[0]);
        index = match.index + count;
      }
      processLexem(value.substr(index))
      return {
        relevance: relevance,
        keyword_count: keyword_count,
        value: result,
        language: language_name
      };
    } catch (e) {
      if (e.message.indexOf('Illegal') != -1) {
        return {
          relevance: 0,
          keyword_count: 0,
          value: escape(value)
        };
      } else {
        throw e;
      }
    }
  }

  /*
  Highlighting with language detection. Accepts a string with the code to
  highlight. Returns an object with the following properties:

  - language (detected language)
  - relevance (int)
  - keyword_count (int)
  - value (an HTML string with highlighting markup)
  - second_best (object with the same structure for second-best heuristically
    detected language, may be absent)

  */
  function highlightAuto(text) {
    var result = {
      keyword_count: 0,
      relevance: 0,
      value: escape(text)
    };
    var second_best = result;
    for (var key in languages) {
      if (!languages.hasOwnProperty(key))
        continue;
      var current = highlight(key, text, false);
      current.language = key;
      if (current.keyword_count + current.relevance > second_best.keyword_count + second_best.relevance) {
        second_best = current;
      }
      if (current.keyword_count + current.relevance > result.keyword_count + result.relevance) {
        second_best = result;
        result = current;
      }
    }
    if (second_best.language) {
      result.second_best = second_best;
    }
    return result;
  }

  /*
  Post-processing of the highlighted markup:

  - replace TABs with something more useful
  - replace real line-breaks with '<br>' for non-pre containers

  */
  function fixMarkup(value, tabReplace, useBR) {
    if (tabReplace) {
      value = value.replace(/^((<[^>]+>|\t)+)/gm, function(match, p1, offset, s) {
        return p1.replace(/\t/g, tabReplace);
      });
    }
    if (useBR) {
      value = value.replace(/\n/g, '<br>');
    }
    return value;
  }

  /*
  Applies highlighting to a DOM node containing code. Accepts a DOM node and
  two optional parameters for fixMarkup.
  */
  function highlightBlock(block, tabReplace, useBR) {
    var text = blockText(block, useBR);
    var language = blockLanguage(block);
    if (language == 'no-highlight')
        return;
    var result = language ? highlight(language, text, true) : highlightAuto(text);
    language = result.language;
    var original = nodeStream(block);
    if (original.length) {
      var pre = document.createElement('pre');
      pre.innerHTML = result.value;
      result.value = mergeStreams(original, nodeStream(pre), text);
    }
    result.value = fixMarkup(result.value, tabReplace, useBR);

    var class_name = block.className;
    if (!class_name.match('(\\s|^)(language-)?' + language + '(\\s|$)')) {
      class_name = class_name ? (class_name + ' ' + language) : language;
    }
    block.innerHTML = result.value;
    block.className = class_name;
    block.result = {
      language: language,
      kw: result.keyword_count,
      re: result.relevance
    };
    if (result.second_best) {
      block.second_best = {
        language: result.second_best.language,
        kw: result.second_best.keyword_count,
        re: result.second_best.relevance
      };
    }
  }

  /*
  Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
  */
  function initHighlighting() {
    if (initHighlighting.called)
      return;
    initHighlighting.called = true;
    Array.prototype.map.call(document.getElementsByTagName('pre'), findCode).
      filter(Boolean).
      forEach(function(code){highlightBlock(code, hljs.tabReplace)});
  }

  /*
  Attaches highlighting to the page load event.
  */
  function initHighlightingOnLoad() {
    window.addEventListener('DOMContentLoaded', initHighlighting, false);
    window.addEventListener('load', initHighlighting, false);
  }

  var languages = {}; // a shortcut to avoid writing "this." everywhere

  /* Interface definition */

  this.LANGUAGES = languages;
  this.highlight = highlight;
  this.highlightAuto = highlightAuto;
  this.fixMarkup = fixMarkup;
  this.highlightBlock = highlightBlock;
  this.initHighlighting = initHighlighting;
  this.initHighlightingOnLoad = initHighlightingOnLoad;

  // Common regexps
  this.IDENT_RE = '[a-zA-Z][a-zA-Z0-9_]*';
  this.UNDERSCORE_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_]*';
  this.NUMBER_RE = '\\b\\d+(\\.\\d+)?';
  this.C_NUMBER_RE = '(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)'; // 0x..., 0..., decimal, float
  this.BINARY_NUMBER_RE = '\\b(0b[01]+)'; // 0b...
  this.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~';

  // Common modes
  this.BACKSLASH_ESCAPE = {
    begin: '\\\\[\\s\\S]', relevance: 0
  };
  this.APOS_STRING_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    illegal: '\\n',
    contains: [this.BACKSLASH_ESCAPE],
    relevance: 0
  };
  this.QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    illegal: '\\n',
    contains: [this.BACKSLASH_ESCAPE],
    relevance: 0
  };
  this.C_LINE_COMMENT_MODE = {
    className: 'comment',
    begin: '//', end: '$'
  };
  this.C_BLOCK_COMMENT_MODE = {
    className: 'comment',
    begin: '/\\*', end: '\\*/'
  };
  this.HASH_COMMENT_MODE = {
    className: 'comment',
    begin: '#', end: '$'
  };
  this.NUMBER_MODE = {
    className: 'number',
    begin: this.NUMBER_RE,
    relevance: 0
  };
  this.C_NUMBER_MODE = {
    className: 'number',
    begin: this.C_NUMBER_RE,
    relevance: 0
  };
  this.BINARY_NUMBER_MODE = {
    className: 'number',
    begin: this.BINARY_NUMBER_RE,
    relevance: 0
  };
  this.REGEXP_MODE = {
    className: 'regexp',
    begin: /\//, end: /\/[gim]*/,
    illegal: /\n/,
    contains: [
      this.BACKSLASH_ESCAPE,
      {
        begin: /\[/, end: /\]/,
        relevance: 0,
        contains: [this.BACKSLASH_ESCAPE]
      }
    ]
  }

  // Utility functions
  this.inherit = function(parent, obj) {
    var result = {}
    for (var key in parent)
      result[key] = parent[key];
    if (obj)
      for (var key in obj)
        result[key] = obj[key];
    return result;
  }
});/*!
 * @preserve
 * jquery.scrolldepth.js | v0.6
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(e,n,t){"use strict";var r,a,o,i={minHeight:0,elements:[],percentage:!0,userTiming:!0,pixelDepth:!0,nonInteraction:!0},l=e(n),c=[],u=0;e.scrollDepth=function(h){function p(e,n,t,i){o?(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventValue:1,eventNonInteraction:h.nonInteraction}),h.pixelDepth&&arguments.length>2&&t>u&&(u=t,dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:"Pixel Depth",eventLabel:f(t),eventValue:1,eventNonInteraction:h.nonInteraction})),h.userTiming&&arguments.length>3&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:e,eventLabel:n,eventTiming:i})):(r&&(ga("send","event","Scroll Depth",e,n,1,{nonInteraction:h.nonInteraction?1:0}),h.pixelDepth&&arguments.length>2&&t>u&&(u=t,ga("send","event","Scroll Depth","Pixel Depth",f(t),1,{nonInteraction:h.nonInteraction?1:0})),h.userTiming&&arguments.length>3&&ga("send","timing","Scroll Depth",e,i,n)),a&&(_gaq.push(["_trackEvent","Scroll Depth",e,n,1,h.nonInteraction]),h.pixelDepth&&arguments.length>2&&t>u&&(u=t,_gaq.push(["_trackEvent","Scroll Depth","Pixel Depth",f(t),1,h.nonInteraction])),h.userTiming&&arguments.length>3&&_gaq.push(["_trackTiming","Scroll Depth",e,i,n,100])))}function g(e){return{"25%":parseInt(.25*e,10),"50%":parseInt(.5*e,10),"75%":parseInt(.75*e,10),"100%":e-5}}function s(n,t,r){e.each(n,function(n,a){-1===e.inArray(n,c)&&t>=a&&(p("Percentage",n,t,r),c.push(n))})}function v(n,t,r){e.each(n,function(n,a){-1===e.inArray(a,c)&&e(a).length&&t>=e(a).offset().top&&(p("Elements",a,t,r),c.push(a))})}function f(e){return(250*Math.floor(e/250)).toString()}function m(e,n){var t,r,a,o=null,i=0,l=function(){i=new Date,o=null,a=e.apply(t,r)};return function(){var c=new Date;i||(i=c);var u=n-(c-i);return t=this,r=arguments,0>=u?(clearTimeout(o),o=null,i=c,a=e.apply(t,r)):o||(o=setTimeout(l,u)),a}}var D=+new Date;h=e.extend({},i,h),e(t).height()<h.minHeight||("function"==typeof ga&&(r=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(a=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(o=!0),h.percentage?p("Percentage","Baseline"):h.elements&&p("Elements","Baseline"),l.on("scroll.scrollDepth",m(function(){var r=e(t).height(),a=n.innerHeight?n.innerHeight:l.height(),o=l.scrollTop()+a,i=g(r),u=+new Date-D;return c.length>=4+h.elements.length?void l.off("scroll.scrollDepth"):(h.elements&&v(h.elements,o,u),void(h.percentage&&s(i,o,u)))},500)))}}(jQuery,window,document);;/*!
 * @preserve
 * riveted.js | v0.4.0
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT license
 */
var riveted=function(){function e(e){"function"==typeof ga&&(y=!0),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(T=!0),"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push&&(I=!0),e=e||{},m=parseInt(e.reportInterval,10)||5,g=parseInt(e.idleTimeout,10)||30,"function"==typeof e.eventHandler&&(f=e.eventHandler),"function"==typeof e.userTimingHandler&&(s=e.userTimingHandler),p="nonInteraction"in e&&(e.nonInteraction===!1||"false"===e.nonInteraction)?!1:!0,t(document,"keydown",v),t(document,"click",v),t(window,"mousemove",n(v,500)),t(window,"scroll",n(v,500)),t(document,"visibilitychange",o),t(document,"webkitvisibilitychange",o)}function n(e,n){var t,i,o,a=null,r=0,u=function(){r=new Date,a=null,o=e.apply(t,i)};return function(){var c=new Date;r||(r=c);var d=n-(c-r);return t=this,i=arguments,0>=d?(clearTimeout(a),a=null,r=c,o=e.apply(t,i)):a||(a=setTimeout(u,d)),o}}function t(e,n,t){e.addEventListener?e.addEventListener(n,t,!1):e.attachEvent?e.attachEvent("on"+n,t):e["on"+n]=t}function i(){clearTimeout(b),r()}function o(){(document.hidden||document.webkitHidden)&&i()}function a(){L+=1,L>0&&L%m===0&&f(L)}function r(){w=!0,clearTimeout(_)}function u(){i(),R=!0}function c(){R=!1}function d(){w=!1,clearTimeout(_),_=setInterval(a,1e3)}function l(){var e=new Date,n=e-k;h=!0,s(n),_=setInterval(a,1e3)}function v(){R||(h||l(),w&&d(),clearTimeout(b),b=setTimeout(i,1e3*g+100))}var f,s,m,g,p,y,T,I,h=!1,w=!1,R=!1,L=0,k=new Date,_=null,b=null;return s=function(e){I?dataLayer.push({event:"RivetedTiming",eventCategory:"Riveted",timingVar:"First Interaction",timingValue:e}):(y&&ga("send","timing","Riveted","First Interaction",e),T&&_gaq.push(["_trackTiming","Riveted","First Interaction",e,null,100]))},f=function(e){I?dataLayer.push({event:"Riveted",eventCategory:"Riveted",eventAction:"Time Spent",eventLabel:e,eventValue:m,eventNonInteraction:p}):(y&&ga("send","event","Riveted","Time Spent",e.toString(),m,{nonInteraction:p}),T&&_gaq.push(["_trackEvent","Riveted","Time Spent",e.toString(),m,p]))},{init:e,trigger:v,setIdle:i,on:c,off:u}}();;/*
 * scripts.js
 *
 * auto-concatenated jquery, symbolset and custom alternate files
 *
 */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-19400273-5', 'auto');
ga('send', 'pageview');


function trackEvent(cat, action, label){
  if (cat && action && label) {
    ga('send', 'event', cat, action, label);
  }
}

var body = $('body');

$(document).ready(function() {

  // Reading Time
  $(".time").text(function (index, value) {
    return Math.round(parseFloat(value));
  });

  if (body.data('lazyload')) {
    $('#loader li img').lazyload({
      effect : "fadeIn",
      threshold : 50
    });
  }

  if (body.data('lettering')) {
    $("#post-title").lettering();
  }

  if (body.data('fittext')) {
    $("#post-title").fitText();
  }

  if (body.data('code')) {
    $('pre code').each(function(e) {
      highlightBlock(e);
    });
  }

  if (body.data('video')) {
    $(".body").fitVids();
  }

});

// Analytics additions
(function($, win, doc) {

  $.scrollDepth({
    // minHeight: 2000,
    elements: [
        'article .body'
      , '#next-previous-post'
      , '#profile'
    ],
    percentage: true,
    userTiming: true,
    pixelDepth: false,
    nonInteraction: false
  });

  riveted.init({
    reportInterval: 10,   // Default: 5
    idleTimeout: 40,      // Default: 30
    nonInteraction: true  // Default: true
  });


})(jQuery, window, document);
