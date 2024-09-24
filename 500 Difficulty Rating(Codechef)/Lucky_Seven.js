// your code goes here
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(input){
    let str = input.trim();
    console.log(str[6])
})
