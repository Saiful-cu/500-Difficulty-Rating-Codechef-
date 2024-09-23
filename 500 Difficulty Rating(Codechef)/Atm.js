process.stdin.setEncoding('utf8');

let inputString = '';

process.stdin.on('data', function(input){
    inputString += input;
})

process.stdin.on('data', ()=>{
    let [X, Y] = inputString.split(' ').map(Number);
    
    if((X+0.5)<=Y){
        if(X%5 == 0)
          Y = Y-X-0.5;
     }
     else{
        Y = Y;
     }
     console.log(Y.toFixed(2))
   
})