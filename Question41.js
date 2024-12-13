// 41. Create a function to calculate the distance between two points defined by their x, y coordinates

let x1 = 1;
let y1 = 2;
let x2 = 4;
let y2 = 6;

function twopointsdistance(x1 , y1 , x2 , y2){
    let dx = x2 - x1;
    let dy = y2 - y1;

    let distance = Math.sqrt((dx * dx) + (dy * dy));
    return distance;
}
let result = twopointsdistance(x1 , y1 , x2 , y2);
console.log(result);


// Second method
let obj1 = {x:1 , y:2};
let obj2 = {x:4 , y:6};

function twopointsdistance2(x1 , y1 , x2 , y2){
    let dx = x2 - x1;
    let dy = y2 - y1;

    let distance = Math.sqrt((dx * dx) + (dy * dy));
    return distance;
}
let result2 = twopointsdistance2(obj1.x , obj1.y , obj2.x , obj2.y);
console.log(result2);