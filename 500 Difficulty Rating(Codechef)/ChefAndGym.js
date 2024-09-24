// your code goes here
function Flow(input) {
    
    const lines = input.trim().split('\n');
    
    
    const T = parseInt(lines[0]);
    
    for (let i = 1; i <= T; i++) {

        let N = lines[i].trim().split(' ').map(Number);
        let a = N[0];
        let b = N[1];
        let c= N[2];
       
       
        if(a+b <= c ){
            console.log(2)
        }
        else if(a <= c){
            console.log(1);
        }
        else
            console.log(0);
       
       
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
