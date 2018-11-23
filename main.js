$(window).on('load', function(){
	$('#1').click( function(){
		$('header').css('background', 'url(./img/img1.jpg)');
	})
	$('#2').click( function(){
		$('header').css('background', 'url(./img/img.jpg)');
		$('header').css('background-position', 'center');
	})
	$('#3').click( function(){
		$('header').css('background', 'url(./img/img1.jpg)');
		$('header').css('background-position', 'center');
	})
	$('#4').click( function(){
		$('header').css('background', 'url(./img/img.jpg)');
	})
})

$(function(){
  $('.circle').click(function(){
    $('.circle').removeClass("active");
    $(this).addClass("active");
});
});
