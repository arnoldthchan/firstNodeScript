var https = require('https');

function getHTML(options,callback){
// The function definition will now accept a callback as a second parameter.
// function body will invoke (call) the callback when the data is fully received
// in place of the original console.log.
  var dataTotal = '';
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      dataTotal += data;

    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      // console.log(dataTotal);
      printHTML(dataTotal);
    });
  })
};

function printHTML (html) {
  console.log(html);
}
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getHTML(requestOptions, printHTML());