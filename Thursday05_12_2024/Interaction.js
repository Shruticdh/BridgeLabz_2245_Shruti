let message = alert("hi this is a alert button");
console.log(message);
//alert method displays an alert message with a ok button and doesnot take a input value
//You cannot run alert, prompt, or confirm directly in VS Code, as they are part of the JavaScript browser environment
//prompt displays a dialog box that prompts user for input and then prints the text 
let text;
let favdrink=prompt("whats your fav drink");
switch(favdrink){
case "coca cola":
    text="i love coca cola";
    break;
case "pepsi":
    text="pi love pepsi";
    break;
case "fanta":
text="i love fanta mirinda";
break;
default:
    text="I have never heard of that";

}
//or another example we can have is
let username=prompt("what is your name");
console.log(username);
//confirm-ask the user for confirmation
let isConfirmed = confirm("Do you want to proceed?");
console.log(isConfirmed);