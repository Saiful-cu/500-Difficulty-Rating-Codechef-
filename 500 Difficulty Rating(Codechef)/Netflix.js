// your code goes here
function Flow(input) {
    
    const lines = input.trim().split('\n');
    
    
    const T = parseInt(lines[0]);
    
    for (let i = 1; i <= T; i++) {

        let N = lines[i].trim().split(' ').map(Number);
        let a = N[0];
        let b = N[1];
        let c= N[2];
        let x = N[3];
       
        if(a+b >= x || a+c >= x || b+c >= x){
            console.log("YES")
        }
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
