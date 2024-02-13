"use strict";

const jokeButton = document.getElementById("vic-btn");
const jokeEl = document.getElementById("vic");

const generirajVic = () => {
    const xhr = new XMLHttpRequest();
    const metoda = "GET";
    const url = "https://api.chucknorris.io/jokes/random";

    xhr.open(metoda, url);

    xhr.onreadystatechange = function () {
        if(this.readyState === 4){
            if(this.status === 200){
                jokeEl.innerHTML = JSON.parse(this.response).value;
            } else{
                jokeEl.innerHTML = "nema viceva nisu prosli";
            }
 
        }
    };
    xhr.send();
};



jokeButton.addEventListener("click", generirajVic);
document.addEventListener("DOMContentLoaded", generirajVic);