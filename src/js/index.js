$('#myCarousel').carousel({
    interval: 4000
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
  
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
  
      next.children(':first-child').clone().appendTo($(this));
    }
  });


// changeColor

let btnColorChangeW = document.querySelector('#blanc')
let btnColorChangeB = document.querySelector('#noir')

let elements = document.querySelectorAll(".theme");

const changeWhite = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style[elements[i].dataset.prop] = "";
    }
};

btnColorChangeW.addEventListener('click',changeWhite)

const changeBlack = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style[elements[i].dataset.prop] = elements[i].dataset.kleur;
    }
};

btnColorChangeB.addEventListener('click',changeBlack)

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

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   }


btnConnection.addEventListener('click',btnOneClick)

spanCroix.addEventListener('click',spanOneClick)