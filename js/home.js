// navbar
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    if(scrollY >= 270){
        navbar.classList.add('newBg')
    }else{
        navbar.classList.remove('newBg')
    }
    console.log(scrollY)
})