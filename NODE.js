const button = document.querySelectorAll('.faq-toggle');
const faq = document.querySelectorAll('.faq');

button.forEach((btn, idx) => {
    btn.addEventListener('click', ()=> {
        faq[idx].classList.toggle('active')
    })
})