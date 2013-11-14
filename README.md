svg_alike
=========

Self contained SVG polyfill that swaps out SVG for PNG in non-supporting browsers.

SVG is awesome. You get double density out of the box, you can pinch to zoom without pixelation, but what about IE8?

SVG-alike checks for SVG support, and if it doesn't find it, swaps in a png instead.

##Usage##

Save your images in both svg and png format, and place them side by side.

Import JQuery

    <script src="jQuery.js"></script>

Download and import SVG-alike

    <script src="svg_alike.js"></script>

Pop your SVG on the page using an img tag, like so:

    <img src="awesome.svg" />

On older browsers, SVG-alike will rewrite your image tag like so:

    <img src="awesome.png" />

## A note on SVG ##

You can make SVG graphics with many vector editing packages including Illustrator and Inkscape. You can use them anywhere you would use a jpg or png file, just insert them using an img tag.

Because SVG files are vector you can zoom in on them without pixelation. This is great for mobile sites.