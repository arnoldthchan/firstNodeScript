//Transforms the html string into ALL CAPS and prints it to the console.
var getHTML = require('../http-functions');
var https = require('https');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  /* Write your code here! */
  console.log(html.toUpperCase());

}

getHTML(requestOptions, printUpperCase);


