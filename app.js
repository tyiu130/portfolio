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

   navMenu.addEventListener('click', function(){
        navMenu.classList.toggle('navOpen');
        navMenu.classList.toggle('active');

   })


//Citations: "Fade and scroll items in view while scrolling" by Kevin Powell, Dec 12 2022
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 0.5
    // rootMargin: "0px 0px -100px 0px"
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