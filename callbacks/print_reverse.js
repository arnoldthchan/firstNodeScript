//Reverses the html string and then prints it to the console.
var getHTML = require('../http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printReverse);
