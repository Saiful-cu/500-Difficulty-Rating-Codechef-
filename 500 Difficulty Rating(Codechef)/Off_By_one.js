process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input){
    let [x,y] = input.trim().split(' ').map(Number);
    let sum = x+y
    console.log(sum+'1');
})