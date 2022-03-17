$(function(){
  $('img.head').hover(function(){
    $('.popup .h_txt').show(1500);
  }, function(){
  $('.popup .h_txt').hide(2000);
  });

  $('.cmty li').hover(function(){
    $('.cmty li:nth-child>span').addClass('on').show(500);
  }, function(){
    $('.cmty li:nth-child>span').removeClass('on').hide(500);
  });
});



// $(function(){
//   $('img.head').hover(function(){
//     $('.popup .h_txt').show(1500);
//   }, function(){
//   $('.popup .h_txt').hide(2000);
//   });
// });