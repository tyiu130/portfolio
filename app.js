const portfolio = {};

portfolio.init = function(){
    portfolio.setUpEventListeners();
}


portfolio.setUpEventListeners = function() {
    const navBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.mobileNav');

    navBtn.addEventListener('click', function(){
        navBtn.classList.toggle('active');
        navMenu.classList.toggle('navOpen');
    })

    // //REVEAL ANIMATION
    // const slide = document.querySelector('.slide');
    // const appear = document.querySelector('.slideAppear');
    
    // slide.addEventListener('scroll', function() {
    //     slide.classList.add('appear');
    // }) 

}


portfolio.init();