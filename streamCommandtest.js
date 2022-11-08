const process = require('child_process').spawn('ping', ['airplanegobrr.us.to']);

// this works...
process.stdout.on('data', function(buf) {
    console.log("OUT",String(buf));
});

// this never works...
process.stderr.on('data', function(buf) {
    console.log("EER", String(buf));
});

// this works, but doesn't let me stream STDERR content...
process.on('error', (err) => {
    console.log('there was an error: ' + err);
});