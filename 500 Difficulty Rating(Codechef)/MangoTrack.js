function Flow(input) {
    // Split the input into an array of lines
    const lines = input.trim().split('\n');
    
    // Extract the number of testcases
    const T = parseInt(lines[0]);
    
    // Iterate through each testcase
    for (let i = 1; i <= T; i++) {
        // Get the number for the current testcase
        let N = lines[i].trim().split(' ').map(Number);
        let x = N[0];
        let y = N[1];
        let z = N[2];
        
        
        let carryMango = z-y;
        console.log(Math.floor(carryMango/x ))
       
       
    }
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});

process.stdin.on('end', function() {
    Flow(input);
});
