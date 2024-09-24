function Flow(input) {
    
    const lines = input.trim().split('\n');
    
    
    const T = parseInt(lines[0]);
    
    for (let i = 1; i <= T; i++) {

        let N = lines[i].trim().split(' ').map(Number);
        let x = N[0];
        let y = N[1];
       
        let song = y*3;
        
        
       console.log(Math.floor(x/song));
       
       
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
