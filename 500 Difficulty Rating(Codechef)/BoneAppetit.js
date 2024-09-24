process.stdin.setEncoding('utf8');
process.stdin.on('data', (input) => {
    const lines = input.trim().split('\n');  // Split input by newlines
    const [N, M] = lines[0].split(' ').map(Number);  // First line: N and M
    const [X, Y] = lines[1].split(' ').map(Number);  // Second line: X and Y

    const totalTreats = (N * X) + (M * Y);
    console.log(totalTreats);
});
