process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const lines = input.trim().split('\n');  // Split input by new lines
    const T = parseInt(lines[0]);            // First line is number of test cases
    
    for (let i = 1; i <= T; i++) {
        const [X, Y] = lines[i].split(' ').map(Number);  // Split and parse the numbers
        console.log(X - Y);  // Output the result
    }
});
