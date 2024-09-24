// your code goes here
function Flow(input) {
    
    const lines = input.trim().split('\n');
    
    
    const T = parseInt(lines[0]);
    
    for (let i = 1; i <= T; i++) {

        let N = parseInt( lines[i].trim().split('\n'));
        
       
       
        if((N/100)*10 < 100 ){
            console.log(100)
        }
        
        else
            console.log((N/100)*10);
       
       
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
