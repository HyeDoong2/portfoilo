const sections = document.querySelectorAll(".section");
let current = 0;
let isScrolling = false;

window.addEventListener("wheel", function(e){

  e.preventDefault();
  
  if(isScrolling) return;

  isScrolling = true;

  if(e.deltaY > 0){
    current++;
  }else{
    current--;
  }

  if(current < 0) current = 0;
  if(current >= sections.length) current = sections.length -1;

  sections[current].scrollIntoView({
    behavior:"smooth"
  });

  showAnimation();

  setTimeout(function(){
    isScrolling = false;
  },800);

},{passive:false});


const fades = document.querySelectorAll(".fade");

function showAnimation(){

  fades.forEach(function(el){
    el.classList.remove("show");
  });

  const active = sections[current].querySelectorAll(".fade");

  active.forEach(function(el){
    el.classList.add("show");
  });

}

showAnimation();