const portfolio = {};

portfolio.init = function(){
    portfolio.setUpEventListeners();
}


portfolio.setUpEventListeners = function() {
    const navBtn = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.mobileNav');
    const navLinks = document.querySelector('.mobileLinks');
    const navAbout = document.querySelector('.about');


    navBtn.addEventListener('click', function(){
        navBtn.classList.toggle('active');
        navMenu.classList.toggle('navOpen');
       
    })

   navMenu.addEventListener('click', function(){
        navMenu.classList.toggle('navOpen');
        navBtn.classList.toggle('active');

   })

   navLinks.addEventListener('click', function(){
       navBtn.classList.toggle('inactive');
   })

    navAbout.addEventListener('click', function () {
        navBtn.classList.toggle('inactive');
    })


 

//Citations: "Fade and scroll items in view while scrolling" by Kevin Powell, Dec 12 2022
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})
}


portfolio.init();