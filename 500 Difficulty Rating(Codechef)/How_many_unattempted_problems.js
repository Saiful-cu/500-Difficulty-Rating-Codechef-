process.stdin.setEncoding('utf8');

process.stdin.on('data',function(input){
    const [X, Y] = input.trim().split(' ').map(Number);
    console.log(X-Y);
})