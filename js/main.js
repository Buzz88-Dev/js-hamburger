// creo variabile clickOpen collegata al menu tendina con classe fa-bars
let clickOpen = document.querySelector(".fa-bars");
console.log(clickOpen);

// creo variabile clickClose collegata alla "X" di chiusura con classe fa-times
let clickClose = document.querySelector(".fa-times");
console.log(clickClose);

// creo var collegata al menu hamburger
let menuHamburger = document.querySelector(".hamburger-menu");
console.log(menuHamburger);

// quando clicco su clickOpen imposto display block al menu hamburger
clickOpen.addEventListener("click",

    function(){
        menuHamburger.style.display = "block";
        console.log(menuHamburger);
    }
);

// quando clicco su clickClose imposto display none al menu hamburger
clickClose.addEventListener("click",

    function(){
        menuHamburger.style.display = "none";
        console.log(menuHamburger);
    }
);