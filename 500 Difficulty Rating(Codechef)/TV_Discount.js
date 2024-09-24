function Flow(input) {
    const lines = input.trim().split('\n');
    const t1 = parseInt(lines[0]);

    for (let i = 1; i <= t1; i++) {
        const numbers = lines[i].split(' ').map(Number);
        const a = numbers[0]; // Integer A
        const b = numbers[1]; // Integer B
        const c = numbers[2];
        const d = numbers[3];

       if(a-c > b-d ){
           console.log("Second");
       }
       else if(a-c< b-d){
           console.log("First");
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
