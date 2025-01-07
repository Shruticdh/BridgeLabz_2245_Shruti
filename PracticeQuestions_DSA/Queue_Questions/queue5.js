// 5) Generate Binary Numbers from 1 to N
// Given a number N, generate binary numbers from 1 to N using a queue.

function generateBinaryNumbers(N) {
    const queue = [];
    const result = [];

    queue.push('1');

    for (let i = 1; i <= N; i++) {
        const current = queue.shift();
        result.push(current);
        queue.push(current + '0');
        queue.push(current + '1');
    }

    return result;
}
const N = 10;
console.log(generateBinaryNumbers(N)); 

