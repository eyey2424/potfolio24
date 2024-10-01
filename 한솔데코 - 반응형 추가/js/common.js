$('nav > ul ').hover(function(){
    // 올렸을 때
    $('nav ul ul').stop().slideDown()
}, function(){
    // 내렸을 때
    $('nav ul ul').stop().slideUp()
})


/************ 슬라이드 **************/
setInterval(function(){
    $('.visual .con .slide ul').animate({
        'top': '-350px'
    }, 1000, function(){
        // 첫번째 슬라이드 뒤에 붙이기
        $('.visual .con .slide ul ').append($('.visual .con .slide li:nth-child(1)'))
        // top을 다시 0으로
        $('.visual .con .slide ul').css('top', '0')
    })
}, 3000)