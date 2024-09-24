process.stdin.setEncoding('utf8');
process.stdin.on('data', (input)=>{
    const nums = input.trim().split('\n');
    const T = parseInt(nums[0])
    for(let i=1;i<=T;i++){
        let x = nums[i].split(' ');
        if(x == 6){
            console.log("Yes")
        }
        else{
            console.log("NO")
        }
    }
} )