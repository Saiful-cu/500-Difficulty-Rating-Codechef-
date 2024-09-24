process.stdin.setEncoding('utf8');

let inputString = '';

process.stdin.on('data', function(input) {
    inputString += input;
});

process.stdin.on('end', function() {
    const lines = inputString.trim().split('\n'); // Split the input into lines
    const T = parseInt(lines[0],10); // First line is the number of test cases

    for (let i = 1; i <= T; i++) {
        const X = parseInt(lines[i].trim()); // Split the test case on spaces and convert to int

        if (X >= 67 && X <= 45000) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
});
 
