$(document).ready(function(){
    $('header div.head_top div nav ul > li').mouseenter(function(){
        $('header div div nav ul li ol').removeClass('topMenuActive');
        $(this).children('ol').addClass('topMenuActive');
    });
    $('header div.head_top div nav ul > li').mouseleave(function(){
        $('header div div nav ul li ol').removeClass('topMenuActive');
    });
    // PC 맨위에 메뉴
    $('header div.head_top div label').click(function(){
        $('header div.head_top div.menu').toggleClass('mobileMenu');
        $('header div.head_top div label span').toggleClass('labelActive');
        $('header div.head_top div label span:nth-of-type(1)').toggleClass('labelActive01');
        $('header div.head_top div label span:nth-of-type(2)').toggleClass('labelActive02');
        $('header div.head_top div label span:nth-of-type(3)').toggleClass('labelActive03');
    });
    // 햄버거
    $('section.store div ul li i').hover(function(){
        $(this).toggleClass('black');
        $(this).toggleClass('red');
    });

    $('section.store div ul li:nth-of-type(1)').hover(function(){
        $('section.store div ol li:nth-of-type(1) img').toggleClass('Active20');
    })
    $('section.store div ul li:nth-of-type(2)').hover(function(){
        $('section.store div ol li:nth-of-type(2) img').toggleClass('Active20');
    })
    $('section.store div ul li:nth-of-type(3)').hover(function(){
        $('section.store div ol li:nth-of-type(3) img').toggleClass('Active20');
    })
    $('section.store div ul li:nth-of-type(4)').hover(function(){
        $('section.store div ol li:nth-of-type(4) img').toggleClass('Active20');
    })
    //근처갔을때 opcity 20%

    $('section.store div ul li i').hover(function(){
        $('section.store div ol li').eq($(this).parent().index()).find('img').removeClass('Active20');
        $('section.store div ol li').eq($(this).parent().index()).find('img').addClass('Active50');
    },function(){
        $('section.store div ol li').eq($(this).parent().index()).find('img').removeClass('Active50');
        $('section.store div ol li').eq($(this).parent().index()).find('img').addClass('Active20');
    })
    //map아이콘 마우스 hover 20%삭제, 50%add

    // //opcity100% 매장 사진 나타내기 
    $('section.store div ul li i').click(function(){
        console.log(($(this).parent().index()));
        $('section.store div > i').addClass('Active100'); 
        $('section.store div ul li').addClass('Active0');
        $('section.store div ol li').eq($(this).parent().index()).find('img').addClass('Active100');
        $('section.store div ol li').eq($(this).parent().index()).find('img').removeClass('Active50');
        $('section.store div ol li').eq($(this).parent().index()).find('div').addClass('addressActive');
    });

    $('section.store div > i').click(function(){
        $('section.store div ol li img').removeClass('Active100');
        $('section.store div ol li div').removeClass('addressActive');
        $('section.store div > i').removeClass('Active100'); //x 숨기기
        $('section.store div ul li').removeClass('Active0'); //map아이콘 나타내기
    });
    //매장 사진 숨기기

    $('section.product > ul li').click(function(){
        $('section.product > ul li').removeClass('productMenuActive');
        $(this).addClass('productMenuActive');
        $('section.product ol > li').removeClass('productActive');
        $('section.product ol > li').eq($('section.product > ul li').index(this)).addClass('productActive');
    });
    //상품 이미지 변경

    $('section.gallery div ul li').click(function(){
        $('section.gallery div ol li').removeClass('galleryActive');
        $('section.gallery div ol li').eq($('section.gallery div ul li').index(this)).addClass('galleryActive');
    });
    $('section.gallery div ol li strong').click(function(){
        $('section.gallery div ol li').removeClass('galleryActive');
    });
    //gallery 사진 나타내기

    $('section.company ul li').hover(function(){
        $('section.company ul li').removeClass('b');
        $('section.company ul li').removeClass('c');
        $('section.company ul li').removeClass('d');
    })
    //스크롤할때 필요한 delay시간, hover할때는 제거

    $(document).scroll(function(){
        //console.log($(document).scrollTop());
        if($(document).scrollTop() > $('section.company').offset().top-($(window).height()*0.7)){
            $('section.company ul li').removeClass('scrollActive');
        }
    });
    // prev next
})
