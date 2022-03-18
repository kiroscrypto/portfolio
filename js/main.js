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