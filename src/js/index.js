

// Create Carsouel 

$('#myCarousel').carousel({
    interval: 4000
})

$('.carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


// Creat changeColor

let btnColorChangeW = document.querySelector('#blanc')
let btnColorChangeB = document.querySelector('#noir')

let elements = document.querySelectorAll(".theme");

const changeWhite = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style[elements[i].dataset.prop] = "";
    }
};

btnColorChangeW.addEventListener('click', changeWhite)

const changeBlack = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style[elements[i].dataset.prop] = elements[i].dataset.kleur;
    }
};

btnColorChangeB.addEventListener('click', changeBlack)

// Create Modale 


let Modale = document.getElementById('myModal')
let btnConnection = document.querySelector('#btn-connection')
let spanCroix = document.getElementsByClassName("close")[0]
console.log(btnConnection)
console.log(Modale)
console.log(spanCroix)

const btnOneClick = () => {
    Modale.style.display = "block"
    //Modale.classList.remove("d-none")
}
// Quand on appuie sur le button connecté , le modale apparait il apparait parce que on à mis le modal en display none 

const spanOneClick = () => {
    Modale.style.display = "none"
}
// Quand  appuie sur le cursor , le modale disparait parce qu'il est mis en display none

btnConnection.addEventListener('click', btnOneClick)

spanCroix.addEventListener('click', spanOneClick)

let btnConnectModal = document.querySelector('#connect2')
let btnSign = document.querySelector('#sign')
let divConnexion = document.getElementsByClassName("connexion")[0]
let divInscription = document.getElementsByClassName("inscription")[0]

console.log(btnConnectModal)
console.log(btnSign)
console.log(divConnexion)

const pressInscription = () => {
    divInscription.classList.remove("d-none");
    divConnexion.classList.add("d-none");
    //si j'ai utliserd-none de bootstap il faut utliser eun classelist 
}

const pressConnexion = () => {
    divInscription.classList.add("d-none");
    divConnexion.classList.remove("d-none");
    //si j'ai utliserd-none de bootstap il faut utliser eun classelist 
}
btnSign.addEventListener('click', pressInscription)
btnConnectModal.addEventListener('click', pressConnexion)


// NAVBAR creaiton 

let recupNavbar = document.querySelector("#NavbarRecup");
console.log(recupNavbar)

//window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      console.log('Hello');
      //ajout class fixed-top a la navbar
      recupNavbar.classList.add("fixed-top");

      
    } else {
            //retirer class fixed-top a la navbar
        recupNavbar.classList.remove("fixed-top");

    }
  }


  window.addEventListener("scroll" , scrollFunction)
