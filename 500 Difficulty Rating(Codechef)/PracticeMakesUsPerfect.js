/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/
process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputStdin = "";

process.stdin.on('data', function (data) {
    inputStdin += data;
});

process.stdin.on('end', function () {
    let nums = inputStdin.toString().split(' ').map(Number);
    start(nums);    
});

function start(nums) {
    let counts  = 0;
    for(let i=0;i<4;i++){
        if(nums[i] >=10){
           counts ++; 
        }
    }
    console.log(counts)
}
