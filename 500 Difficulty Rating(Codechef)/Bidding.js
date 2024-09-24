process.stdin.setEncoding('utf8')

let inputString = '';

process.stdin.on('data', function(input) {
    inputString += input;
});

process.stdin.on('end', function() {
    const lines = inputString.trim().split('\n');
    let T = parseInt(lines[0]);

    for (let i = 1; i <= T; i++) {
        let nums = lines[i].split(' ').map(Number);
        
        if(nums[0] >nums[1] && nums[0] > nums[2]){
            console.log("Alice")
        }
        else if(nums[1] >nums[0] && nums[1] > nums[2]){
            console.log("Bob")
        }
        else{
            console.log("Charlie")
        }
    }

})