!function(e){var r,a,u=e.event;r=u.special.debouncedresize={setup:function(){e(this).on("resize",r.handler)},teardown:function(){e(this).off("resize",r.handler)},handler:function(e,n){function t(){e.type="debouncedresize",u.dispatch.apply(i,o)}var i=this,o=arguments;a&&clearTimeout(a),n?t():a=setTimeout(t,r.threshold)},threshold:150}}(jQuery),jQuery.throttle=function(n,t){var i=null;return t=t||200,function(){if(null==i)i=+new Date,n.call(this,arguments);else{var e=+new Date;i+t<e&&(i=e,n.call(this,arguments))}}},jQuery.debounce=function(i,o,r){var a;return function(){var e=this,n=arguments,t=r&&!a;clearTimeout(a),a=setTimeout(function(){a=null,r||i.apply(e,n)},o),t&&i.apply(e,n)}},function(e){if(e(".be-youtube-embed").length){var n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(n,t);var i=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){"function"==typeof i&&i(),e(document).trigger("YTAPIReady")}}}(jQuery),function(l){"use strict";var c=l(window);l.fn.isVisible=function(e){var n=l(this),t=c.scrollTop(),i=t+window.innerHeight,o=n.offset().top,r=o+n.height(),a=t-e,u=i+e;return a<=r&&r<=u||o<=u&&a<=o}}(jQuery),function(t){function e(){if(0<n.length){var e=n.filter(function(e,n){return t(this).isVisible(200)});0<e.length&&(e.one("load",function(){t(this).addClass("be-lazy-loaded")}).each(function(e){var n=t(this);n.attr("src",n.attr("data-src"))}),n=n.not(e))}}var n=t(".be-lazy-load");t(window).on("scroll",function(){e()}),window.BeLazyLoad={add:function(e){null!=e&&0<e.length&&(n=n.add(e))},lazyLoad:e},t(function(){n=t(".be-lazy-load"),e()})}(jQuery);