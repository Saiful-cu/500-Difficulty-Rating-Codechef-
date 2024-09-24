process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
  const nums = input.trim().split(" ");
    let X= parseInt(nums[0])
    
    solve(X)
})

function solve(X){
    let ans = X *2;
    console.log(ans)
}