let photoslider = document.querySelector('.photoslider')
let photosliderimage = document.querySelectorAll('.photoslider img')

let prevbtn = document.querySelector('#prevbtn')
let nextbtn = document.querySelector('#nextbtn')

let counter = 1;
const size = photosliderimage[0].clientWidth;

photoslider.style.transform = 'translateX(' + (-size*counter) + 'px)'

nextbtn.addEventListener('click',()=>{
    if(counter >= photosliderimage.length -1) return;
     photoslider.style.transition = "transform 0.4s ease-in-out"
     counter++;
    photoslider.style.transform = 'translateX(' + (-size*counter) + 'px)'
})
prevbtn.addEventListener('click',()=>{
    if(counter <= 0 ) return;
    photoslider.style.transition = "transform 0.4s ease-in-out"
    counter--;
   photoslider.style.transform = 'translateX(' + (-size*counter) + 'px)'
})

photoslider.addEventListener('transitionend',()=>{
    console.log("fired")
    if(photosliderimage[counter].id === 'lastclone'){
    photoslider.style.transition = "none"
    counter = photosliderimage.length - 2
    photoslider.style.transform = 'translateX(' + (-size*counter) + 'px)'
    // console.log(counter)
}
if(photosliderimage[counter].id === 'firstclone'){
    photoslider.style.transition = "none"
    counter = photosliderimage.length - counter
    photoslider.style.transform = 'translateX(' + (-size*counter) + 'px)'
    // console.log(counter)
}
})