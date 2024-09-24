process.stdin.setEncoding('utf8');
process.stdin.on('data',function(userInput){
    const arrs = userInput.trim().split('\n');
    const T = parseInt(arrs[0]);
    for(let i=1;i<=T;i++){
        const [x,y] = arrs[i].split(' ').map(Number);
        console.log(x*y);
    }
})