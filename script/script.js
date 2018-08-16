//STICKY MENU FUNCTION 

window.onscroll = function() {myFunction()};

var navbar = document.getElementById('navbar');
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageXOffset >= sticky) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky');
    }
}