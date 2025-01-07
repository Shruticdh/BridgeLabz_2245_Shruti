const prices = [100, 80, 60, 70, 60, 75, 85];

function calculateStockSpan(prices) {
    const spans = [];
    const stack = []; 

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0) {
            if (prices[i] >= prices[stack[stack.length - 1]]) {
                stack.pop();
            } else {
                break;
            }
        }

        if (stack.length === 0) {
            spans[i] = i + 1;
        } else {
            spans[i] = i - stack[stack.length - 1];
        }
        stack.push(i);
    }
    return spans;
}
console.log("Stock Spans:", calculateStockSpan(prices));
