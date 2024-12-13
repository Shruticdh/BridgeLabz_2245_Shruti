// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
let x1 = 1;
let y1 = 2;
let r1 = 5;
let x2 = 4;
let y2 = 6;
let r2 = 3;

function twocircle(x1 , y1 , x2 , y2){
    let dx = x2 - x1;
    let dy = y2 - y1;

    let distance = Math.sqrt((dx * dx) + (dy * dy));

    if(distance <= (r1+r2)){
        return true;
    }
    else {
        return false;
    }
  
}
let result = twocircle(x1 , y1 , x2 , y2);
console.log(result);
