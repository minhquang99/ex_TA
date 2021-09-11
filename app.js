let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let el_to_show = document.querySelectorAll('.show-on-scroll-1')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 200

    //window.innerHeight - distance || document.documentElement.clientHeight - distance = 554

    // console.log("1", rect)

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop = () => {
    el_to_show.forEach(el => {
        if (isElInViewPort(el)) {
            el.classList.add('show')
        } else {
            el.classList.remove('show')
        }
    })

    scroll(loop)
}

loop()

/////////////////////////
let el_to_show_2 = document.querySelectorAll('.show-on-scroll-2')

isElInViewPort2 = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 400

    //window.innerHeight - distance || document.documentElement.clientHeight - distance = 354

    // console.log("2", rect.top)

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop2 = () => {
    el_to_show_2.forEach(el => {
        if (isElInViewPort2(el)) {
            el.classList.add('show')
        }
    })

    scroll(loop2)
}

loop2()

///////////////////////
let el_to_show_3 = document.querySelectorAll('.show-on-scroll-3')

isElInViewPort3 = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 600

    //window.innerHeight - distance || document.documentElement.clientHeight - distance = 154

    // console.log("3", rect.top)

    return (rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop3 = () => {
    el_to_show_3.forEach(el => {
        if (isElInViewPort3(el)) {
            el.classList.add('show')
        }
    })

    scroll(loop3)
}

loop3()

//////////////////////////////
let el_to_hide_1 = document.querySelectorAll('.show-on-scroll-1')

isElInHidePort1 = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 600

    //window.innerHeight - distance || document.documentElement.clientHeight - distance = 154

    // console.log("4", rect.top)

    return (rect.top >= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop4 = () => {
    el_to_hide_1.forEach(el => {
        if (isElInHidePort1(el)) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })

    scroll(loop4)
}

loop4()

//////////////////////////////
let el_to_hide_2 = document.querySelectorAll('.show-on-scroll-2')

isElInHidePort2 = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 500

    //window.innerHeight - distance || document.documentElement.clientHeight - distance = 154

    // console.log("5", rect.top)

    return (rect.top >= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop5 = () => {
    el_to_hide_2.forEach(el => {
        if (isElInHidePort2(el)) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })

    scroll(loop5)
}

loop5()

//////////////////////////////
let el_to_hide_3 = document.querySelectorAll('.show-on-scroll-3')

isElInHidePort3 = (el) => {
    let rect = el.getBoundingClientRect()

    let distance = 400

    //window.innerHeight - distance || document.documentElement.clientHeight - distance = 154

    // console.log("4", rect.top)

    return (rect.top >= (window.innerHeight - distance || document.documentElement.clientHeight - distance))
}

loop6 = () => {
    el_to_hide_3.forEach(el => {
        if (isElInHidePort3(el)) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }
    })

    scroll(loop6)
}

loop6()

/////////////////////////
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
/////////////////////////////////////////
$(function() {
    $('.slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1, 
        prevArrow: '<span class="arrow-prev"><i class="bx bx-chevrons-left"></i></span>',
        nextArrow: '<span class="arrow-next"><i class="bx bx-chevrons-right"></i></span>'
      });
})

 