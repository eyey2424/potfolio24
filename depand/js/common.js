<<<<<<< HEAD
$('nav>ul').hover(function(){
    $('nav ul ul , #menu_bg').stop().slideDown()
},function(){
    $('nav ul ul, #menu_bg').stop().slideUp()
    
    return false
})


/************ 슬라이드 **************/
setInterval(function(){
    $('.slide ul').animate({
        'top': '-300px'
    }, 1000, function(){
        // 첫번째 슬라이드 뒤에 붙이기
        $('.slide ul').append($('.slide ul li:nth-child(1)'))
        // top을 다시 0으로
        $('.slide ul').css('top', '0')
    })
}, 3000)

/* 공지사항 탭 */
$('.notice > ul > li > a').click(function(){
    $('.notice > ul > li > a').removeClass('on')
    $(this).addClass('on')

    return false
})



/* rkfh */
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
=======
$('nav>ul').hover(function(){
    $('nav ul ul , #menu_bg').stop().slideDown()
},function(){
    $('nav ul ul, #menu_bg').stop().slideUp()
    
    return false
})


/************ 슬라이드 **************/
setInterval(function(){
    $('.slide ul').animate({
        'top': '-300px'
    }, 1000, function(){
        // 첫번째 슬라이드 뒤에 붙이기
        $('.slide ul').append($('.slide ul li:nth-child(1)'))
        // top을 다시 0으로
        $('.slide ul').css('top', '0')
    })
}, 3000)

/* 공지사항 탭 */
$('.notice > ul > li > a').click(function(){
    $('.notice > ul > li > a').removeClass('on')
    $(this).addClass('on')

    return false
})



/* rkfh */
gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector(".container");

/* SMOOTH SCROLL */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
>>>>>>> cbf27aaaf81eb10e123c7a08ed3afe6f81d49fd0
});