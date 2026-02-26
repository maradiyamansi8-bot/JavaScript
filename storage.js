//localStorage API: setItem,getItem,removeItem, clear
//localstorage --> save that data into browser's storage, after close browser data wasn' deletaed
//(browser nu aevu storage ke jema deta store thai chhe and browser band thai jay to pan data delete thato nathi)
//~ 5 MB Storage

//setItem
//localStorage.setItem("key", value)
localStorage.setItem("user", "Test_User");

//getItem
//localStorage.getItem("Key_name")
console.log(localStorage.getItem("user"));

//removeItem
// localStorage.removeItem("name");
localStorage.removeItem("user");

//updateItem
localStorage.setItem("user", "Demo_user")


//sessionStorage API
//Session Storage ---> save that for temporary time when you close tab delete was deleted
//(aa storage data ne temporarily time mate save kari ne rakhe chhe,jyare pan tab close karsho tyrae teni sathe data pan delete thai jai chhe)
// ~ 5MB storage

// setItem
sessionStorage.setItem("email", "user@mail.com");

// getItem
console.log(sessionStorage.getItem("email"));

//removeItem
//sessionStorage.removeItem("email")

//update
sessionStorage.setItem("email", "demo@test.com");

//clear
//sessionStorage.clear

//Basic cookie structure (manual key = Value);
// Cookie --> store data into browser cookies 
//(cookie data ne browser na cookies name ni property ma save kare chhe, cookie no use light data save karva mate thai chhe)
//when you reload web page data will be automatically send to server

// ~ 4 Kb storage
document.cookie = "email =  test@gmail.com";

//max age
document.cookie = "age = 10; max-age = 60";//60 sec

//date and time
document.cookie = "username = mansi; expires = wed,28 Feb 2026 12:00:00 GMT";

//Storing/retrieving strings vs JSON
//save as string into localStorageand Seesionstorage -- try to save array and string 

//JSON.stringify
localStorage.setItem(
    "data",
    JSON.stringify([{ username:"test", email : "test@gmail.com", age:25}]),
);

//JSON.parse
let a = JSON.parse(localStorage.getItem("data"))

//dark light mode --> save into storage
// window.matchMedia('(prefers-color-schema: light)') --> false
let btn = document.querySelector("button")
let body = document.querySelector("body")
btn.addEventListener("click",()=>
    {
    if(body.classList.contains("dark")){
    body.classList.remove("dark")
    // body.classList.add("dark");
    btn.textContent = "Dark Mode";
    localStorage.setItem("mode", "light");
    btn.style.backgroundColor="black";
    btn.style.color="white";
    }
    else{
    body.classList.add("dark");
    btn.textContent = "light mode";
    localStorage.setItem("mode","dark");
    btn.style.backgroundColor="white";
    btn.style.color="black";
    }
}
)