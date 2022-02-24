let ratingStarInput = [...document.querySelectorAll('.rating-star')];

ratingStarInput.map((star, index) =>{
    star.addEventListener('click', ()=>{
        for(let i=0; i<5; i++){
            if(i<= index){
                ratingStarInput[i].src = 'img/fill star.png';
            }else{
                ratingStarInput[i].src = 'img/no fill star.png';
            }
        }
    })
})

let inView = document.querySelectorAll('.in-view');
inView.addEventListener('click', ()=>{
    alert("Page Under Construction! Check back Later");
})
// add navbar links tomorrow