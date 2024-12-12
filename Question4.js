// Question5 :- Print all the multiplication tables with numbers from 1 to 10

let n =10;
for(let i=1 ; i<=n ; i++){

    for(let j=1 ; j<=n ; j++){
       let table = i * j;
        console.log( i , "* " , j , "= " , table);
    }
}