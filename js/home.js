// navbar
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    if(scrollY >= 600){
        navbar.classList.add('newBg')
    }else{
        navbar.classList.remove('newBg')
    }
    console.log(scrollY)
})

// image collapse
let collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i)=>{
    item.addEventListener('mouseover', ()=>{
        collageImages.map((image, index)=>{
            if(index !=i){
                image.style.filter = 'blur(10px)';
                item.style.zIndex = 2;
            }
        })
    })
    item.addEventListener('mouseleave', ()=>{
        collageImages.map((image, index)=>{
            image.style=null;
        })
    })
})