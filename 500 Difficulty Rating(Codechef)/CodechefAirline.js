function Flow(input) {
    // Split the input into an array of lines
    const lines = input.trim().split('\n');
    
    // Extract the number of testcases
    const T = parseInt(lines[0]);
    
    // Iterate through each testcase
    for (let i = 1; i <= T; i++) {
        // Get the number for the current testcase
        let N = lines[i].trim().split(' ').map(Number);
       
        if(N[0]*10 <= N[1])
          console.log(N[0]*10*N[2]);
          
        else
        console.log(N[1]*N[2]);
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
