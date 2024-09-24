process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  const nums = input.trim().split(" ");
    let X= parseInt(nums[0])
    let Y = parseInt(nums[1])
    
    solve(X,Y)
})

function solve(X, Y){
    let ans = parseInt(7) - (X+ Y);
    console.log(ans)
}