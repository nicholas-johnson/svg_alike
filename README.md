svg_alike
=========

Self contained SVG polyfill that swaps out SVG for JPG in non-supporting browsers.

SVG is awesome. You get double density out of the box, you can pinch to zoom without pixelation, but what about IE8?

SVG-alike checks for SVG support, and if it doesn't find it, swaps in a JPG instead.

##Usage.##

1. Save your images in both svg and jpg format, and place them side by side.
2. Import JQuery <script src="jQuery.js"></script>
3. Import SVG-alike <script src="svg_alike.js"></script>
4. Pop your SVG on the page using an img tag, like so: <img src="awesome.svg" />
5. On older browsers, SVG-alike will rewrite your image tag like so: <img src="awesome.jpg" />