let hiddenMenu = document.querySelector('.overlay-menu'),
    openMenu = document.querySelector('nav .right-small i'),
    closeMenu = document.querySelector('.overlay-menu .times'),
    cardsToggle = document.querySelectorAll('.card .title'),
    cookieBox = document.querySelector('.cookie-box'),
    closeCookieBox = document.querySelector('.cookie-box button'),
    rightSmall = document.querySelector('nav .right-small'),
    rightLarge = document.querySelector('nav .right-large'),
    homeHero = document.querySelector('.home img');
    
openMenu.addEventListener('click', function(){
    hiddenMenu.style.transform = 'translateX(0)';
});

closeMenu.addEventListener('click', function() {
    hiddenMenu.style.transform = 'translateX(100rem)';
});

function showCookieBox() {
    cookieBox.style.transform = 'scale(1)';
}

setTimeout(showCookieBox, 5000);

closeCookieBox.addEventListener('click', ()=>{
    //cookieBox.style.transform = 'scale(0)';
    cookieBox.style.transition = 'all .5s ease-out';
    cookieBox.style.opacity = '0';
});


if (window.innerWidth < 980) {
    for (var i = 0; i < cardsToggle.length; i++) {
        cardsToggle[i].addEventListener('click', function() {
            var title = this.nextElementSibling,
                angleIcon = this.lastElementChild;
            if (title.style.maxHeight) {
                title.style.maxHeight = null;
                title.style.paddingBottom = '0';
                angleIcon.src = 'images/angle-down.svg';
            } else {
                title.style.maxHeight = '100%';
                //title.scrollHeight + "px";
                title.style.paddingBottom = '1rem';
                angleIcon.src = 'images/angle-up.svg';
            }
        });
    }

} else{
    ///alert('SUCCESS!');
    homeHero.src = 'images/home-hero-2048x1107.jpg';
    cookieBox.style.transformOrigin = 'bottom left';

    for (var i = 0; i < cardsToggle.length; i++) {
        cardsToggle[i].addEventListener('mouseover', function() {
            var angleIcon = this.lastElementChild;
            angleIcon.src = 'images/angle-up.svg';
        });
    }

    for (var i = 0; i < cardsToggle.length; i++) {
        cardsToggle[i].addEventListener('mouseleave', function() {
            var angleIcon = this.lastElementChild;
            angleIcon.src = 'images/angle-down.svg';
        });
    }
}
