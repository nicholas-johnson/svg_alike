/*
  Self contained SVG polyfill

  SVG is awesome. You get double density out of the box, you can pinch to zoom without pixelation, but what about IE8?
  SVG-alike checks for SVG support, and if it doesn't find it, swaps in a PNG instead.

  Usage.
  1. Save your images in both svg and png format, and place them side by side.
  2. Import JQuery <script src="jQuery.js"></script>
  3. Import SVG-alike <script src="svg_alike.js"></script>
  4. Pop your SVG on the page using an img tag, like so: <img src="awesome.svg" />
  5. On older browsers, SVG-alike will rewrite your image tag like so: <img src="awesome.png" />
*/

(function($) {
  $.fn.svgAlike = function() {
    svgSupport = function() {
      var div = createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
    }
    if (!svgSupport()) {
      this.find('img[src^=".svg"').each(function() {
        $(this).attr('src', img.attr('src').replace(".svg", ".png"));
      })
    }
    return self;
  }
})(jQuery);