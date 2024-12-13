// 53. Calculate 70! with high precision (all digits)

let number = 70;
let facotrial = BigInt(1);
function factorialpre(number){
for(let i=1 ; i<number ; i++){
    facotrial *= BigInt(i);
}
return facotrial;
}
let result = factorialpre(number);
console.log(result.toString());
