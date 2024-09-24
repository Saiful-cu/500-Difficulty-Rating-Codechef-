process.stdin.setEncoding('utf8');

let inputString = '';

process.stdin.on('data', function(input) {
    inputString += input;
});

process.stdin.on('end', function() {
    const lines = inputString.trim().split(' ').map(Number);

        if (lines[0] <lines[1] ) {
            console.log(lines[1])
        }
        else
            console.log(lines[0])
    

});