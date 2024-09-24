process.stdin.setEncoding('utf8');
process.stdin.on('data', (input)=>{
    const nums = input.trim().split('\n');
    const T = parseInt(nums[0])
    for(let i=1;i<=T;i++){
        const[X,Y] = nums[i].split(' ').map(Number);
        if(X>=Y){
            console.log("NO");
        }
        else{
            console.log("YES")
        }
    }
})
