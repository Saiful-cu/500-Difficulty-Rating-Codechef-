process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    const lines = input.trim(); // Split the input into lines
    const T = parseInt(lines[0]); 

        if (T >= 6 && T <= 8) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    
});