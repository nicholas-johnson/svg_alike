svg_alike
=========

Self contained SVG polyfill that swaps out SVG for JPG in non-supporting browsers.

SVG is awesome. You get double density out of the box, you can pinch to zoom without pixelation, but what about IE8?

SVG-alike checks for SVG support, and if it doesn't find it, swaps in a JPG instead.

##Usage##

Save your images in both svg and jpg format, and place them side by side.

Import JQuery

    <script src="jQuery.js"></script>

Download and import SVG-alike

    <script src="svg_alike.js"></script>

Pop your SVG on the page using an img tag, like so:

    <img src="awesome.svg" />

On older browsers, SVG-alike will rewrite your image tag like so:

    <img src="awesome.jpg" />