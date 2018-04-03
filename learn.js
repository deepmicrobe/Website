var fs = require('fs');

// Create a new file
fs.appendFile('mynewfile1.txt', 'Hello content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});

// Create a new, empty file
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});

// Create a new file using writeFile() method
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// Append "This is my text." to the end of the file "mynewfile1.txt"
fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

// Replace the content of the file "mynewfile3.txt"
fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

fs.unlink('mynewfile2.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});
