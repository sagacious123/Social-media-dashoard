const body = document.querySelector("body");
const toggleBg = document.querySelector(".toggle-bg");
const toggleBtn = document.querySelector(".toggle-button");
const box = document.getElementsByClassName("box");
const greyBg = document.querySelector(".bg-grey");
const overview = document.querySelector(".overview")
const h1 = document.getElementsByTagName("h1");
const h3 = document.getElementsByTagName("h3");
const h4 = document.querySelector("h4");
const h5 = document.getElementsByTagName("h5");
const h6 = document.getElementsByTagName("h6");

var i;

toggleBg.addEventListener("click", function() {
    this.classList.toggle("bg-toggle");
    toggleBtn.classList.toggle("toggle");
    body.classList.toggle("body-bg");
    greyBg.classList.toggle("grey-bg");
    overview.classList.toggle("white");
    

 
    for(i = 0; i < box.length; i++) {
        box[i].classList.toggle("box-bg");
    }

    for(i = 0; i < h1.length; i++) {
        h1[i].classList.toggle("white");   
    }

    for(i = 0; i < h3.length; i++) {
        h3[i].classList.toggle("white");
    }

    h4.classList.toggle("white");

    for(i = 0; i < h5.length; i++) {
        h5[i].classList.toggle("grey");
    }

    for(i = 0; i < h6.length; i++) {
        h6[i].classList.toggle("grey");
    }
})