const hidden = document.querySelector(".fas");

hidden.addEventListener("click", function(){

    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.classList += " active";
});

const show = document.querySelector(".close .fas");

show.addEventListener("click", function(){

    const hamburger = document.querySelector(".hamburger-menu");

    hamburger.classList.remove("active");
});