var https = require('https');

module.exports = function getHTML (options, callback) {
    // notice that https.get takes a callback with one parameter -
    // response, which is a Stream that represents the HTTP response
    https.get(options, function (response) {

      var dataString = '';

      // set encoding of received data to UTF-8
      response.setEncoding('utf8');

      // the callback is invoked when a `data` chunk is received
      response.on('data', function (data) {
        console.log('Chunk Received. Length:', data.length)
        dataString += data;

      });

      // the callback is invoked when all of the data has been received
      // (the `end` of the stream)
      response.on('end', function() {
        console.log('Response stream complete.');
        // invoked callback function and take dataString as argument;
        callback(dataString);
      });
    });
};