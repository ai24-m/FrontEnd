let wrapper = document.querySelector('.wrapper');
let login = document.querySelector('.login-link');
let register = document.querySelector('.register-link');
let btnpopUp = document.querySelector('.btnLogin-popup');
let iconeClose = document.querySelector('.icon-colse');


register.addEventListener('click',()=>{
    wrapper.classList.add('active')
});

login.addEventListener('click',()=>{
    wrapper.classList.remove('active')
});

btnpopUp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
});


iconeClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup')
});