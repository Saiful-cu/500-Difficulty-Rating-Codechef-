function Flow(input) {
    // Split the input into an array of lines
    const lines = input.trim().split('\n');
    
    // Extract the number of testcases
    const T = parseInt(lines[0]);
    
    // Iterate through each testcase
    for (let i = 1; i <= T; i++) {
        // Get the number for the current testcase
        let N = parseInt(lines[i].trim().split('\n'));
       
        if(N <= 15)
          console.log("Yes");
          
        else
        console.log("No");
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
