!function(e){e.fn.dwSticky=function(o){var t={},s=e(this).eq(0);if(!s||s.length<1)return!1;o=o||{},t.settings=o,o.offsetTop=o.offsetTop||0,o.offsetBot=o.offsetBot||0,o.offsetAppear=o.offsetAppear||0;var d=o.$stEnd||e();if(d.length<1)return!1;var i=s.parent(),n=function(){setTimeout(function(){var t=i.offset().top,n=d.offset().top-s.outerHeight(!0),f=e(window).scrollTop()+o.offsetTop;s.css({position:"fixed"}),f<t+o.offsetAppear?(s.removeClass("dw-sticked"),s.removeClass("dw-sticked-basement"),s.css({position:"relative",top:"auto"})):f>n-o.offsetBot?(s.addClass("dw-sticked"),s.addClass("dw-sticked-basement"),s.css({position:"fixed",top:n-f+o.offsetTop-o.offsetBot})):(s.addClass("dw-sticked"),s.removeClass("dw-sticked-basement"),s.css({position:"fixed",top:o.offsetTop}))},0)};return e(window).on("scroll",n),e(window).on("resize",n),e(document).on("ready",n),e(window).on("load",n),s.addClass("dw-sticky"),n(),t.destroy=function(){e(window).off("scroll",n),e(window).off("resize",n),e(document).off("ready",n),e(window).off("load",n),s.removeClass("dw-sticky"),s.css({position:"",top:""}),s.removeClass("dw-sticked")},t.calculateAndSet=n,s.data("dwSticky",t),t},window.observeDOM=function(e,o){if(void 0===e)return!1;var t=window.MutationObserver||window.WebKitMutationObserver,s=window.addEventListener;if(t){new t(function(e,t){(e[0].addedNodes.length||e[0].removedNodes.length)&&o()}).observe(e,{childList:!0,subtree:!0})}else s&&e.addEventListener("DOMNodeInserted",o,!1)}}(jQuery);