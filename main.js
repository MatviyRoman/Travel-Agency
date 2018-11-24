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

// $(function(){
//   $('.menu').click(function(){
//     	$('.footer-link').show();
// 	});
// });

$(function(){
  $('.circle').click(function(){
    	$('.circle').removeClass("active");
    	$(this).addClass("active");
	});
});

$(function(){
  	$('.country').click(function(){
    	$('.iconHide').toggle();
    	$('.iconShow').toggle();
	});
});

// $('.slideShow').carousel({
//   interval: 2000,
//   keyboard: false,
//   pause: "hover",
//   ride: true,
//   wrap: true
// })

// $('.btn-sm').button('toggle')

$(function(){
 	$('#btn1').click(function(){
    	$('.content1').show();
    	$('#btn1').hide();
	});
});

$(function(){
 	$('#btn2').click(function(){
    	$('.content2').show();
    	$('#btn2').hide();
	});
});

$(function(){
 	$('#btn3').click(function(){
 		$('.content1').hide();
    	$('.content2').hide();
    	$('#btn1').show();
    	$('#btn2').show();
	});
});