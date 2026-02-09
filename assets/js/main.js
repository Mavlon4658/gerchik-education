const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const reviewSwp = new Swiper('.review-swp', {
    slidesPerView: 1,
    breakpoints: {
        850: {
            slidesPerView: 'auto',
        }
    },
    navigation: {
        nextEl: '.review-btns .btn-next',
        prevEl: '.review-btns .btn-prev',
    }
})

const accordins = document.querySelectorAll('.faq-accordion');

if (accordins.length) {
    accordins.forEach((item) => {
        const header = item.querySelector('.faq-accordion__btn');
        const content = item.querySelector('.faq-accordion__body-wrap');

        if (item.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    
        header.addEventListener('click', () => {
            item.classList.toggle('active')
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        });
    });
}