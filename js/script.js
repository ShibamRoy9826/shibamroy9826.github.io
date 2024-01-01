// Loader

const loader = document.getElementById("loader");

document.body.style.overflow = "hidden";
const allElements = document.querySelectorAll("*");

allElements.forEach((element) => {
element.style.pointerEvents = "none";
});


function enableEverything() {

  document.body.style.overflowY = "auto";
  const allElements = document.querySelectorAll("*");

  allElements.forEach((element) => {
    element.style.pointerEvents = "auto";
  });
}

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("load", function () {
    setTimeout(() => {
      // setTimeout(function(){
      loader.style.display = "none";

      // loader.style.opacity=0;
      document.getElementById("loader").classList.add('hidden');
      enableEverything(); 

    }, 1000);
  });
});


$(function() {
  $(".lImage").fadeIn(500, function() {
    $(".lImage").fadeOut(1000, function() {
      $("#loader").fadeOut(1000, function() {
        
      });
    });
  });
});

!function(){
    setTimeout(function(){
        $('#loader').css({opacity: '0'}).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
            $(this).hide();
        });
    }, 1000);
}();



// hamburger

const hamburger=document.querySelectorAll(".hamburger")
const menu=document.querySelectorAll(".navBar")

hamburger[0].addEventListener("click", () => {

  hamburger[0].classList.toggle("active");
  menu[0].classList.toggle("active");

})

document.querySelectorAll(".navLinkSmall").forEach(n=> n.addEventListener("click",()=>{
  hamburger[0].classList.remove("active");
  menu[0].classList.remove("active");

}))



