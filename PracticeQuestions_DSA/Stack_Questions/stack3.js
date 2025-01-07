function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(evaluate(a, b, token));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
}

function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
}

function evaluate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return Math.trunc(a / b);
    }
}

const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens));
const tokens2 = ["4", "13", "5", "/", "+"]; 
console.log(evalRPN(tokens2)); 
