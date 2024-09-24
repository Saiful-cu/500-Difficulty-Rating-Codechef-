function Flow(input) {
    const lines = input.trim().split('\n');
    const t1 = parseInt(lines[0]);

    for (let i = 1; i <= t1; i++) {
        const numbers = lines[i].split(' ').map(Number);
        const a = numbers[0]; // Integer A
        const b = numbers[1]; // Integer B
        

       if(a> b){
           console.log("NEW PHONE");
       }
       else if(a<b){
           console.log("REPAIR");
       }
       else{
           console.log("Any");
       }
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
