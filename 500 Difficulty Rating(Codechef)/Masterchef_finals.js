process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input){
    const nums =  input.trim().split('\n');
    let T = parseInt(nums[0]);
    for(let i=1;i<=T;i++){
        let l = parseInt(nums[i]);
        //console.log(l)
        if(10 > l){
            console.log("YES");
        }
        else if(l == 10){
            console.log("YES");
        }
        else{
            console.log("NO");
        }
    }
})