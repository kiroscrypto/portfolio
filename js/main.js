$(function(){
  $('#gnb>li').hover(function(){
    $(this).find('.g2').addClass('on');
  }, function(){
  $(this).find('.g2').removeClass('on');
  });

  $('img.head').hover(function(){
    $('.popup .h_txt').show(1500);
  }, function(){
  $('.popup .h_txt').hide(2000);
  });

  $('.biz_area_wrap li').hover(function(){
    $(this).find('.blue_bg').animate({
      height: '100%'
    }, 1000);
    // $(this).find('.blue_bg').animate({
    //   height: '70px'
    // }, 1000);
  });

  $('.biz_area_wrap li').hover(function(){
    $(this).find('button').show();
  }, function(){
  $(this).find('button').hide();
  });

  $('.cmty li').hover(function(){
    $(this).find('.bg_green').addClass('on').fadeIn(1000);
  }, function(){
    $(this).find('.bg_green').removeClass('on').fadeOut(1000);
  });
});






// $(function(){
//   $('img.head').hover(function(){
//     $('.popup .h_txt').show(1500);
//   }, function(){
//   $('.popup .h_txt').hide(2000);
//   });
// });