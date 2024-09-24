process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    const lines = input.trim().split('\n'); // Split the input into lines
    const T = parseInt(lines[0]); // First line is the number of test cases

    for (let i = 1; i <= T; i++) {
        const X = parseInt(lines[i].trim()); // Split the test case on spaces and convert to int

        if (X >= 30 ) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
});
