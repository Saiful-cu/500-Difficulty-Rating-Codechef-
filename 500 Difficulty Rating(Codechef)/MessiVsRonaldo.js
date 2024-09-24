process.stdin.setEncoding('utf8');
process.stdin.on('data', (input)=>{
    
    
        const numbers = input.split(' ').map(Number);
        let messi = (numbers[0] *2 )+ numbers[1];
        let ronaldo = (numbers[2] *2 )+ numbers[3];
        if(messi <ronaldo ){
            console.log("Ronaldo");
        }
        else if(messi > ronaldo)
            console.log("Messi");
        else
            console.log("Equal");
    
})
