Bootstrap-Booklet
=================

A simple library designed to ease the creation of a multiple page booklet, using a content page and pagination to manage navigation. 

Installation
------------

1. Ensure you have the following dependencies downloaded and imported into the HTML file: <br />
  a. jQuery <br />
  b. Bootstrap <br />
If not, please download the latest tested version from <a href="https://github.com/HopefulLlama/Bootstrap-Booklet/tree/master/lib">Bootstrap-Booklet/lib</a>.
2. Download the minified version from <a href="https://raw.githubusercontent.com/HopefulLlama/Bootstrap-Booklet/master/bin/bootstrap-booklet-0.3.min.js">here</a>.
3. Import all files into the relevant HTML page.

Live Example
------------

To view a live, working example with several customisation options, click <a href="http://hopefulllama-portfolio.herokuapp.com/portfolio/Bootstrap-Booklet/example.html">here</a>.

Quick Start
-----------

```javascript
var booklet = new BootstrapBooklet("#booklet");  // Declare variable of new BootstrapBooklet with parameter being a string, referring to the ID of a div element in the HTML.
booklet.addPage("A", "<p>Some test data</p>"); // Call .addPage with a title and the body HTML.
booklet.addPage("1234-abv", "<p>Some more test data</p>");
booklet.generate(); //Generate the booklet.
```
