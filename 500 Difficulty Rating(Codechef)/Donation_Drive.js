process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    const nums = input.trim().split('\n');
    let T = parseInt(nums[0]);
    for (let i = 1; i <= T; i++) {
        let [x, y] = nums[i].trim().split(' ').map(Number);
        let sum = x - y
        console.log(sum );
    }

})