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
    // const reveal = document.querySelector('.reveal');
    // const active = document.querySelector('.active');
    
    // reveal.addEventListener('scroll', function() {
    //     reveal.classList.add('active');
    // })
    
    
}





portfolio.init();