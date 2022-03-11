$('.slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
  });


$('.slider1').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    

    responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
    }]
});


$('.slider5').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,   

    responsive: [
        {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        }
    }] 
});


$('.slider3').slick({    
    responsive: [{

        breakpoint: 2048,
        settings:"unslick",
    },
    {
        breakpoint: 500,
        settings: {
            infinite:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            
        }
    }]
});

$('.slider6').slick({    
    responsive: [{

        breakpoint: 2500,
        settings:"unslick",
    },
    {
        breakpoint: 500,
        settings: {
            infinite:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false
        }
    }]
});


$('.slider2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
});



      
$(".Div1RightContentSec7").click(function() {

    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).parent().find(".JshideDiv").slideUp();
        return
    }

$(this).addClass("active");
$(this).parent().find(".JshideDiv").slideDown() 

})