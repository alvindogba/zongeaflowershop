let section2 = document.getElementById('section2');
let arrowright = document.getElementById('arrow-right');
let arrowleft = document.getElementById('arrow-left')
let animation = document.getAnimations('up')
let animationdown = document.getAnimations('down')


arrowright.addEventListener('click', ()=>{
  // section2.style.background = "url(photo2.jpg)";
  // section2.style.backgroundRepeat ="no-repeat"
  // section2.style.backgroundSize = "cover"
  if (arrowright) {
      section2.style.background = "url(photo2.jpg)";
  section2.style.backgroundRepeat ="no-repeat"
  section2.style.backgroundSize = "cover"
  }
  else if(arrowright = 2){
     section2.style.background = "url(photo3.jpg)";
  section2.style.backgroundRepeat ="no-repeat"
  section2.style.backgroundSize = "cover"
  }
})

// arrowright.addEventListener('click', ()=>{
//   section2.style.background = "url(photo3.jpg)";
//   section2.style.backgroundRepeat ="no-repeat"
//   section2.style.backgroundSize = "cover"
// })

arrowleft.addEventListener('click', ()=>{
  section2.style.background = "url(photo1.jpg)";
  section2.style.backgroundRepeat ="no-repeat"
  section2.style.backgroundSize = "cover"
})

section2.addEventListener("mouseenter", (e)=>{
  arrowright.style.display = "block"
  arrowleft.style.display = "block"
  
})

section2.addEventListener("mouseleave", (e)=>{
    arrowleft.style.animation = animationdown
    arrowright.style.animation = animation
    arrowright.style.display = "none"
    arrowleft.style.display = "none"
  
})