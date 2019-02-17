$(document).ready(function() {

    $('.home-slider__owl').owlCarousel({
	    loop:true,
	    margin:10,
	    items: 1,
	    responsive : {
		    0 : {
		        dots: false
		    },
		    724 : {
		        dots:true
		    }
		}
	});

	$('.go_to').click( function(){ 
	var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); 
        }
	    return false; 
    });

    $(function(){
		
		var a = $('<div class="modal-measure-scrollbar"/>').prependTo($("body")),
		    b = $('<div class="inner"/>').appendTo(a),
	            c = a.width() - b.width();
	     	a.remove();
	    
		$(document) .on('hidden.bs.modal', '.modal', function ()
		{
			$(document.body).css('padding-right','');
			$(window).unbind("resize.modalAlign");  
		}) 

		$(document) .on('show.bs.modal', function (e)
		{
		   	var thisDialog = $(e.target).find('.modal-dialog');
	      		$(e.target).css('display','block');

	      		$(window).bind("resize.modalAlign", function ()
	      		{
	      			thisDialog.css('margin-top', (thisDialog .outerHeight() < $(window).height()) ? (($(window).height() - thisDialog.outerHeight()) / 2 + 'px') : '')
	      		})
	      		
	      		.resize();
	      	
			if ($(window).height() < $(document).height())
		    	{
		        	$('body').css({'padding-right': c + 'px'});
			};
	    });
	});

	$(".photos").on("click", "a", function () {
	   $(".slider__top-img").attr("src", $(this).prop("href"))
	   return false;
	});

	$('#sercher-dd-1 .sercher-menu__item--link').click(function() {
		var linkText = $(this).text()
		console.log('клик');
		console.log(linkText);
		$('#sercher-dd-1 .top__sercher-link--top').text(linkText);
		document.getElementById('sercher-dd-1').removeAttr('style');
	});

	$('#sercher-dd-2 .sercher-menu__item--link').click(function() {
		var linkText = $(this).text()
		console.log('клик');
		console.log(linkText);
		
		$('#sercher-dd-2 .top__sercher-link--top').text(linkText);
		$('#sercher-dd-2').removeAttr('style');
		// $('#sercher-dd-2').css({backgroundColor: 'transparent'});
	});

	var buttonText = $('.item-price__buy-text').text();
	$('.item-price__buy').click(function()  {
        $('.item-price__buy').prop('disabled',true);
    	$('.item-price__buy').css({backgroundColor:'#fff'});
        $('.item-price__buy-text').text('Товар в корзине');
        $('.item-price__buy-icobox').css({display:'inline-block'});
        $('.item-price__buy-icobox').animate( {
        	width: '22px',
        	marginRight: '10px'
	        }, 
	        {
	        	duration: 200, 
		        complete: setTimeout(function() {
		       		$('.item-price__buy-ico').css({display:'inline-block'})
		       	}, 300)
	       }  
		);
        setTimeout(function() {
        	$('.item-price__buy').removeAttr('style');
	        $('.item-price__buy-text').removeAttr('style');
	        $('.item-price__buy-ico').removeAttr('style');
	        $('.item-price__buy-icobox').animate( {
        	width: '0',
        	marginRight: '0'
	        }, 
	        {
	        	duration: 200, 
		        complete: setTimeout(function() {
		       		$('.item-price__buy-icobox').removeAttr('style')
		       	}, 400)
		       }
			);
			$('.item-price__buy-text').text(buttonText);
			$('.item-price__buy').prop('disabled',false);
        },2500); 
	});	
});

