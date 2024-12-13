// 40. Implement the bubble sort algorithm for an array of numbers

let arr = [64, 34, 25, 12, 22, 11, 90];

// First Method
arr.sort();
console.log(arr);

// Second Method
function bubbleSort(arr){
    for (let i = 0; i < arr.length - 1; i++) { 
        let swap = false; 
        for (let j = 0; j < arr.length - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
    return arr; 
}

let result = bubbleSort(arr);
console.log(result);