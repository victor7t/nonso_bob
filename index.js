const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const navlogo= document.querySelector('#navbar__logo')


//display mobile menu
const mobileMenu =() => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
}


menu.addEventListener('click', mobileMenu);


//show active menu when scrolling
const highlightMenu =() => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY



    //add 'highlight' class to my menu items
    if(window.innerWidth > 950 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove(highlight)
        return
    }
}