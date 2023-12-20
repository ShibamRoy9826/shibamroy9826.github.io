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

// loader fade out
// !function(){
//     setTimeout(function(){
//         document.querySelector('.loader').css({opacity: '0'}).one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
//             document.querySelector(this).hide();
//         });
//     }, 1000);
// }();
// Auto Writing

let title = document.querySelector('.smallHeading');

let index = 1;
let counter=0;
let messages=["Nice To Meet You","I am Shibam Roy","A School Student","And a Programmer",""];


const typeWriter = () => {
    // let new_title = name.slice(0,index);
    // title.innerText = new_title;
    let new_title = messages[counter].slice(0,index);
    let len=messages[counter].length;
    title.innerText = new_title;

    // index > name.length ? index = 1 : index++;

    if(counter==4){
      counter=-1;
    }
    if (index>len) {
      // for (var i = len - 1; i >= 0; i--) {
      //   index--;
      //   setTimeout(()=> typeWriter(),150)
      // }
      index=1;
      counter++;
    }
    else{
      index++;
    }

    setTimeout(() => typeWriter(), 150)
}

typeWriter();


