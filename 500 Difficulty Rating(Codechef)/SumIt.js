process.stdin.setEncoding('utf8');
process.stdin.on('data', (input)=>{
    const nums = input.trim().split('\n');
    const T = parseInt(nums[0])
    for(let i=1;i<=T;i++){
        const numbers = nums[i].split(' ').map(Number);
        
        if(numbers[0] + numbers[1] == numbers[2]){
            console.log("YES");
        }
        else
             console.log("No");
    }
})
