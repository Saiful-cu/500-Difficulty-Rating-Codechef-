process.stdin.setEncoding('utf8');
process.stdin.on('data', (input)=>{
    const nums = input.trim().split('\n');
    const T = parseInt(nums[0])
    for(let i=1;i<=T;i++){
        const a =parseInt(nums[i].trim()) ;
        if(a>=80){
            console.log("YES");
        }
        else{
            console.log("NO")
        }
    }
})