const btnElem = document.getElementById("btn");

const apiKey= "9gbaZ1vD2X2s69BO/Pk3vw==5lvJuj9C4HKSW7M8";

const options= {
    method:"GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiUrl= "https://api.api-ninjas.com/v1/dadjokes?limit=1"; 

const joke= document.getElementById("joke");

 async function btnEvent() {
    try {

   joke.innerText = "Uploading...";
   btnElem.disabled= true; 
   btnElem.innerText = "Loading...";
   const response = await fetch(apiUrl, options);
   const data= await response.json(); 
   
   joke.innerText = data[0].joke; 

   btnElem.disabled= false; 
   btnElem.innerText = "Tell me a Joke";
    
 } catch (error) {
    joke.innerText= "An error hapenned, please try again later";
    btnElem.disabled= false;
    btnElem.innerText= "Tell me a Joke";
    
 }


   
}

btnElem.addEventListener("click", btnEvent);