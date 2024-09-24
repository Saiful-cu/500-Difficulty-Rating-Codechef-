// your code goes here
function Flow(input) {
    
    const lines = input.trim().split('\n');
    
    
    const T = parseInt(lines[0]);
    
    for (let i = 1; i <= T; i++) {

        let N = lines[i].trim().split(' ').map(Number);
        let c = N[0];
        let x = N[1];
        let y = N[2];
       
        let chocolates = c-x;
        
        
       console.log(chocolates * y);
       
       
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
