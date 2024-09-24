/* We have populated the solutions for the 10 easiest problems for your support.*/
/* Click on the SUBMIT button to make a submission to this problem.*/
process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputStdin = "";

process.stdin.on('data', function (data) {
    inputStdin += data;
});

process.stdin.on('end', function () {
    inputStdin = inputStdin.toString().split('\n');
    start();    
});

function start() {
    let [n, k] = inputStdin[0].split(' ');
    n = Number(n)
    k = Number(k)
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        let cur = Number(inputStdin[i]);
        if(cur % k === 0)
            ans++;
    }
    console.log(ans);
}
