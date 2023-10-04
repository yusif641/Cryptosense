document.querySelector('.calc__info').style.width = document.querySelector('.calc__form').clientWidth + 'px'

window.addEventListener('resize', (e) => {
    document.querySelector('.calc__info').style.width = document.querySelector('.calc__form').clientWidth + 'px'
})

document.querySelectorAll('.cards__item').forEach((el, i, a) => {
    el.addEventListener('mouseover', (e) => {
        el.style.backgroundColor = '#2B076E'
        el.querySelector('.cards__icon').style.transform = 'rotate(20deg)'
        el.querySelector('.cards__name').style.color = '#FFFFFF'
        el.querySelector('.cards__text').style.color = '#FFFFFF'
        el.querySelector('.cards__txt').style.color = '#FFFFFF'
        el.querySelector('.cards__txt').style.opacity = '0.7'
        el.querySelector('.cards__arrow').classList.add('act')
    })  
})
document.querySelectorAll('.cards__item').forEach((el, i, a) => {
    el.addEventListener('mouseout', (e) => {
        el.style.backgroundColor = '#FFFFFF'
        el.querySelector('.cards__icon').style.transform = 'rotate(0deg)'
        el.querySelector('.cards__name').style.color = '#0D0D2B'
        el.querySelector('.cards__text').style.color = '#828282'
        el.querySelector('.cards__txt').style.color = '#BDBDBD'
        el.querySelector('.cards__txt').style.opacity = '1'
        el.querySelector('.cards__arrow').classList.remove('act')
    })  
})

function validate() {
    var form = document.querySelector("form");
    var emaill = document.querySelector(".miting__input");
    var email = document.querySelector(".miting__input").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        emaill.classList.add("valid");
        emaill.classList.remove("invalid");
    }
    else {
        emaill.classList.remove("valid");
        emaill.classList.add("invalid");
    }
    if (email == "") {
        emaill.classList.remove("valid");
        emaill.classList.remove("invalid");
    }
}

$('.icon-menu').click(function (ev) {
    $('.icon-menu, .menu__body').toggleClass('_active');
    $('body').toggleClass('_active');
});