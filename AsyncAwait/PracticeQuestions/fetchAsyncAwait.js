process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const API_URL = "https://dummyjson.com/users";

async function fetchFunction() {
    //fetch will return a promise
  try {
    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log("Error: ", error);
  }
}
fetchFunction();
//fetch() => Response.json() => jsonvalue
//fetch().then((response) => response.json()).then((response) => console.log());
