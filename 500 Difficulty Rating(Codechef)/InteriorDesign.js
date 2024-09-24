process.stdin.setEncoding('utf8');

let inputString = '';

process.stdin.on('data', function(input) {
    inputString += input;
});

process.stdin.on('end', function() {
    const lines = inputString.trim().split('\n');
    const T = parseInt(lines[0], 10);
    for (let i = 1; i <= T; i++) {
        let nums = lines[i].trim().split(' ').map(Number);

        if(nums[0]+nums[1] > nums[2]+nums[3]){
         console.log(nums[2]+nums[3])
     }
     else
        console.log(nums[0]+nums[1])
     }
    

});