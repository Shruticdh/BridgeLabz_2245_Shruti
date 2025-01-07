//Balanced Parentheses
//Given a string containing parentheses, check if the parentheses are balanced.
function balanced(str){
    let stack=[];
    for(let char of str){
        if(char==='(' || char==='{' || char==='['){
            stack.push(char);
        }
        else if(char===')' || char===']' || char==='}'){
            if(stack.length===0){
              return false;
            }
            const top=stack.pop();
            if((char===')' && top!=='(' || char==='}' && top!=='{' || char===']' && top!=='[' ) ){
             return false;
            }
        }
    }
    return stack.length === 0;

}
console.log(balanced("(())"));
