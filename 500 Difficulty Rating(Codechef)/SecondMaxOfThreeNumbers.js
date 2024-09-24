function Sndmax(input) {
    const lines = input.trim().split('\n');
    const n1 = parseInt(lines[0]);

    for (let i = 1; i <= n1; i++) {
        const numbers = lines[i].split(' ').map(Number);
        let maxi = numbers[0];
        let mini = numbers[0];
        let seMax ;
        
        for(let i=1;i<3;i++){
            if(numbers[i] > maxi){
                maxi = numbers[i];
            }
            else if(numbers[i] <mini){
                mini = numbers[i];
            }
        }
        for(let i=0;i<3;i++){
            if(numbers[i] != maxi && numbers[i] != mini)
            {
                seMax = numbers[i];
            }
        }
        console.log(seMax)
    }
}

process.stdin.setEncoding('utf8');
let input = '';
process.stdin.on('data', function(chunk) {
    input += chunk;
});

process.stdin.on('end', function() {
    Sndmax(input);
});
