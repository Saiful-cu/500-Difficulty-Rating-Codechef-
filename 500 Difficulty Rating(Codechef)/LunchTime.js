process.stdin.setEncoding('utf8');

 let inputString = '';

 process.stdin.on('data', function(input) {
     inputString += input;
 });

 process.stdin.on('end', function() {
     const lines = inputString.trim().split('\n');
     const T = parseInt(lines[0], 10);
     for(let i= 1;i<=T;i++){
         let nums = parseInt(lines[i].trim().split('\n'));
         
         if(nums<=4){
         console.log("YES")
     }
     else
        console.log("NO");
     }
     
 });