let book1 = {Sno : 1 , book : "Untouchable" , author : "Mulk Raj Anand" , found(){
    console.log(`Found ${this.book}`)
}}

let book2 = {Sno : 2 ,book : "Train to Pakistan" , author : "Kushwant Singh" , found(){
    console.log(`Found ${this.book}`)
}}

let book3 = {Sno : 3 , book : "godan" ,author : "Munshi Premchand" , found(){
    console.log(`Found ${this.book}`)
}}

let book4 = {Sno : 4 , book : "Romeo and Juliet" , author : "William Shakespeare" , found(){
    console.log(`Found ${this.book}`)
}}

let book5 = book1;
book5.author = "Shruti";
console.log(book1.author);

let allBooks = [...[book1] , ...[book2] , ...[book3] , ...[book4]];
console.log(allBooks);


const booksbundle = JSON.parse(JSON.stringify(allBooks));
console.log(booksbundle);
