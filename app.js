const portfolio = {};

portfolio.init = function(){
    portfolio.setUpEventListeners();
}

portfolio.setUpEventListeners = function() {
    const navBtn = document.querySelector('.hamburger');

    navBtn.addEventListener('click', function(){
        navBtn.classList.toggle('active');
    })
}

portfolio.init();