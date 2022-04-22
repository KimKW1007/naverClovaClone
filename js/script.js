(($,window,document)=>{

  const clova = {
    init(){
      this.header();
      this.banner();
      this.cont1();
      this.cont2();
      this.cont3();
      this.cont4();
      this.cont5();
      this.footer();
      this.mobile();
      this.parallax();
    },
    header(){
      const gnb = $('.gnb'),
        lnb = gnb.find('.lnb');
        /* 메뉴 다운슬라이드 */
        gnb.hover(function(){
          lnb.stop().slideUp(0);
          $(this).find('.lnb').stop().slideDown({
            start: function () {
              $(this).css({
                display: "flex"
              })
            },
          },);
        },function(){
          lnb.stop().slideUp();
        })

        /* 헤더 bg/c 변경 및 다운업*/

        const _header = $('#header'),
              _cont1 = $('#cont1'),
              scrollEnd = ($(document).height() - $(window).height());
        let _cont1OST,
            lastScroll;

              function resizeFn(){
               _cont1OST = _cont1.offset().top - (_header.height()+3);
              }
              resizeFn()
              $(window).resize(resizeFn);


        $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
          if(scrollTop > _cont1OST){
            _header.addClass('white');
          }else{
            _header.removeClass('white');
          }
          if(lastScroll-scrollTop <= 0){
            _header.addClass('up');
          }else{
            _header.removeClass('up');
          }
          if(scrollEnd === scrollTop){
            _header.removeClass('up');
          }
          
          lastScroll = scrollTop;
        })

    },
    banner(){
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay:{
          delay:4000,
        },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
          renderBullet: function (index, className) {
            return `<div class="${className}" aria-selected="false" tabindex="0" role="button" aria-label="Go to slide ${index}" aria-current=""><span class="hide">${index}페이지</span></div>`;
          }
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });



      /* 배너 1번슬라이드 mp4 순환 */
      const _video = $('.video1');
        let currentVideo = 0;

        setInterval(function(){
          currentVideo++;
          _video.eq(currentVideo).removeClass('stop').siblings().addClass('stop');
          if(currentVideo > _video.length- (_video.length/2)-1){
            currentVideo = 0;
            _video.eq(currentVideo).removeClass('stop').siblings().addClass('stop');
          }
        },12000)
    },
    cont1(){
     
    },
    cont2(){
     
    },
    cont3(){
     
    },
    cont4(){
     
    },
    cont5(){
     
    },
    footer(){
     
    },
    mobile(){
     const mobMenuOpBtn = $('.mob-menu-op-btn'),
          mobMenu = $('.mob-menu'),
          mobMenuClBtn = mobMenu.find('.mob-menu-cl-btn');

          mobMenuOpBtn.click(function(e){
            e.preventDefault();
            mobMenu.addClass('on');
          })
          mobMenuClBtn.click(function(e){
            e.preventDefault();
            mobMenu.removeClass('on');
          })

    },
    parallax(){
     
    },
  }
  clova.init();


 

       

        

})(jQuery,window,document)