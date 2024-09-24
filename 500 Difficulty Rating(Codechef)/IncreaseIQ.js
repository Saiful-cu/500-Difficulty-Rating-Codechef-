function Flow(input) {
    // Split the input into an array of lines
    const lines = input.trim().split('\n');
    
    // Extract the number of testcases
    const T = parseInt(lines[0]);
    
   if(T+7 > 170){
       console.log("Yes");
   }
   else{
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
