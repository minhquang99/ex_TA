/* ---------------------- CHOOSE VIDEO -------------------------- */
let listVideo = document.querySelectorAll('.section2-video__list .vid');
let mainVideo = document.querySelector('.section2-video video');

listVideo.forEach(video => {
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');

        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
        }
    }
})
/* ---------------------- SLIDE VIDEO -------------------------- */
$(function() {
    $('.slider').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        prevArrow: '<span class="arrow-prev"><i class="bx bx-chevrons-left"></i></span>',
        nextArrow: '<span class="arrow-next"><i class="bx bx-chevrons-right"></i></span>'
      });
})
/* ---------------------- SCROLL CAR -------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('.to-left-2', 16, {
        x: 250,
        y: -190,
        autoAlpha: 1,
        ease: Power0.easeInOut
    })
    .to('.to-right-2', 16, {
        x: -230,
        y: -180,
        autoAlpha: 1,
        ease: Power0.easeInOut
    }, '-=4')
    .to('.to-left-1', 16, {
        x: 86,
        y: -89,
        autoAlpha: 1,
        ease: Power0.easeInOut
    })
    .to('.to-right-1', 16, {
        x: -75,
        y: -90,
        autoAlpha: 1,
        ease: Power0.easeInOut
    }, '-=4')
    .to('.to-bot', 16, {
        y: -30,
        autoAlpha: 1,
        ease: Power0.easeInOut
    })

    let scene = new ScrollMagic.Scene({
        triggerElement: '.sec-3',
        duration: '100%',
        triggerHook: 0,
    })
    .setTween(timeline)
    .setPin('.sec-3')
    .addTo(controller);
})