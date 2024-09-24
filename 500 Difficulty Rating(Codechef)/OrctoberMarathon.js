process.stdin.setEncoding('utf8')
process.stdin.on('data', (input)=>{
    let nums = parseInt(input.trim());
    if(nums >= 6){
        console.log("BRONZE");
    }
    else if(nums >= 3){
        console.log("SILVER");
    }
    else{
        console.log("GOLD");
    }
})