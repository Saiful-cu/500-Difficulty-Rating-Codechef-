function Flow(input) {
    const lines = input.trim().split('\n');
    const t1 = parseInt(lines[0]);

    for (let i = 1; i <= t1; i++) {
        const numbers = lines[i].split('\n');
        const a = parseInt(numbers);
       console.log(a*2)
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
