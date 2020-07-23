const list = document.querySelector('.list');
const menuBar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.nav');
const logoMenu = document.querySelector('.logo-menu');
const logoMenuHeight = logoMenu.getBoundingClientRect().height;


menuBar.addEventListener('click', () => {
    if(list.classList.contains('show-list')){
        list.classList.remove('show-list');
    }else{
        list.classList.add('show-list');
    }
    list.addEventListener('click', (e) => {
        e.preventDefault();
        const element = document.querySelector(`${e.target.getAttribute('href')}`); 
        const position = element.offsetTop;
        list.classList.remove('show-list');
        window.scrollTo({
            left : 0, 
            top : position - logoMenuHeight,
        });

});
});

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset; 
    const logoMenuHeight = logoMenu.getBoundingClientRect().height;
    if(scrollHeight > logoMenuHeight){
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }

});
