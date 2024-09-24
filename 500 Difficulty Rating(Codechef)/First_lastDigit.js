function Flow(input) {
    // Split the input into an array of lines
    const lines = input.trim().split('\n');
    
    // Extract the number of testcases
    const T = parseInt(lines[0]);
    
 
    for (let i = 1; i <= T; i++) {

        let N = parseInt(lines[i].trim());
        let a = 0;
        
 
        let sum = N % 10;
        
 
        while (N >= 10) {
            N = Math.floor(N / 10);
        }
        a = N;
        
        console.log(sum + a);
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