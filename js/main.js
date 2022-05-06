//
let clickOpen = document.querySelector(".fa-bars");
console.log(clickOpen);

let clickClose = document.querySelector(".fa-times");
console.log(clickClose);

let menuHamburger = document.querySelector(".hamburger-menu");
console.log(menuHamburger);


clickOpen.addEventListener("click",

    function(){
        menuHamburger.style.display = "block";
        console.log(menuHamburger);
    }
);

clickClose.addEventListener("click",

    function(){
        menuHamburger.style.display = "none";
        console.log(menuHamburger);
    }
);