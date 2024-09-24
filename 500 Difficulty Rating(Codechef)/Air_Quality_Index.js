process.stdin.setEncoding('utf8');

let inputString = '';

process.stdin.on('data', function(input) {
    inputString += input;
});

process.stdin.on('end', function() {
    const lines = inputString.trim().split('\n');
    const T = parseInt(lines[0], 10);
    if(T<100){
        console.log("YES")
    }
    else
       console.log("No")
});