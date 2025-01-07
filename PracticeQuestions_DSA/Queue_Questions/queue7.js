// 7) Design a Data Stream for Median Finding
// Design a data structure that supports inserting integers into a stream and retrieving the median at any point.

class MedianFinder {
    constructor() {
        this.nums = [];
    }

    addNum(num) {
        let left = 0, right = this.nums.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (this.nums[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        this.nums.splice(left, 0, num);
    }

    findMedian() {
        const n = this.nums.length;
        if (n % 2 === 1) {
            return this.nums[Math.floor(n / 2)];
        } else {
            const mid = n / 2;
            return (this.nums[mid - 1] + this.nums[mid]) / 2;
        }
    }
}
const medianFinder = new MedianFinder();
medianFinder.addNum(1);
medianFinder.addNum(2);
console.log(medianFinder.findMedian());
medianFinder.addNum(3);
console.log(medianFinder.findMedian());
