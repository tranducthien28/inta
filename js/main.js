$(function () {
    $('.slide').owlCarousel({ loop: 1, autoplay: 1, items: 1, dots: 1, nav: 0})
    $('.pro-cnt').owlCarousel({ loop: 1, autoplay: 1, items: 3, dots: 1, nav: 0, margin: 25})
    $('.pro-newest').owlCarousel({ loop: 1, autoplay: 1, items: 1, dots: 1, nav: 0})
    
    const resizeImage = (e, s) => { s = parseInt($(e).width()) * s; $(e).css({ height: s + "px" }) };
    resizeImage('.news .right .news-item .img', 100/170);
    resizeImage('.technology .img', 160/250)
    resizeImage('.project-item .img', 230/360)
    
    $('.question .item .tit').click(function(){
        $(this).siblings('.answer').slideToggle();
        $(this).toggleClass('active');
    })

    $('.question .answer-item .que').click(function(){
        $(this).siblings('.desc').slideToggle();
        $(this).toggleClass('active');
    })
})