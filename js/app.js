window.onscroll = function(){myFuntion()};
      var header = document.getElementById("myHeader");
      var sticky = header.offsetTop;

      function myFuntion(){
        if(window.pageYOffset > sticky){
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:false,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })      


    $('.js-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      nav:true,
      autoplayHoverPause:true,
      navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
      responsive: {
        0:{
          items:1,
          nav:false
        },
        600:{
          items:2
      },
        1000:{
          items:4
      }
      }
    })

    /* modal */
    const signUp = document.querySelector('.js-signUp');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close');
    const modalContainer = document.querySelector('.modal-container');

    signUp.addEventListener('click',function(){
      modal.classList.add('modal-active');
    });

    modalClose.addEventListener('click',function(){
      modal.classList.remove('modal-active');
    })
    modal.addEventListener('click',function(){
      modal.classList.remove('modal-active');
    })
    modalContainer.addEventListener('click',function(event){
      event.stopPropagation()
    })

/* form */
$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

/* backtop */
$(document).ready(function(){
  // Kiểm tra xem cửa sổ có ở trên cùng hay không nếu không thì nút hiển thị
  $(window).scroll(function(){
    if($(this).scrollTop()>700)
    {
      $("#backtop").fadeIn();
    }
    else{
      $("#backtop").fadeOut();
    }
  })
  $("#backtop").click(function(){
    $("html , body").animate({scrollTop:0},100);
  })
})


 