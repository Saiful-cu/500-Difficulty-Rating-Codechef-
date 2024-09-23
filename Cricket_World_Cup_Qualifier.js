process.stdin.setEncoding('utf8');
process.stdin.on('data',(input)=>{
    const x = parseInt(input.trim());
    
    if(x >= 12){
        console.log('Yes');
    }
    else{
        console.log('No');
    }
})