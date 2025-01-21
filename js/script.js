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


window.addEventListener("load", function () {
  setTimeout(() => {
    // setTimeout(function(){
    loader.style.display = "none";

    // loader.style.opacity=0;
    document.getElementById("loader").classList.add('hidden');
    enableEverything(); 

  }, 1000);
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


// project cards

let cards=document.querySelectorAll(".projectCard");
let children;

cards.forEach(item=>{
  item.addEventListener("mouseover",()=>{
      item.children[1].style.opacity="1";
      item.children[1].disabled="true";
      item.children[1].style.backgroundColor="rgba(0,0,0,0.6)";
      item.children[0].style.filter="grayscale(100%)";
  });
  item.addEventListener("mouseout",()=>{
      item.children[1].style.opacity="0";
      item.children[1].disabled="false";
      item.children[1].style.backgroundColor="rgba(0,0,0,0)";
      item.children[0].style.filter="grayscale(0%)";
  });
})


