process.stdin.setEncoding('utf8');
process.stdin.on('data', (input)=>{
    const nums = input.trim().split('\n');
    const T = parseInt(nums[0])
    for(let i=1;i<=T;i++){
        const X = parseInt(nums[i].split('\n'));
        if(X*4 <= 1000){
            console.log("Yes");
        }
        else{
            console.log("No")
        }
    }
})
