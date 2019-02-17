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


	$('#sercher-dd-1').on('shown.nth.dropdown', function () {
		document.getElementById('sercher-dd-1').style.backgroundColor = '#000';
	});
	$('#sercher-dd-1').on('hidden.nth.dropdown', function () {
		document.getElementById('sercher-dd-1').style.backgroundColor = 'transparent';
	});

	$('#sercher-dd-2').on('shown.nth.dropdown', function () {
		document.getElementById('sercher-dd-2').style.backgroundColor = '#000';
	});
	$('#sercher-dd-2').on('hidden.nth.dropdown', function () {
		document.getElementById('sercher-dd-2').style.backgroundColor = 'transparent';
	});

	$(".photos").on("click", "a", function () {
	   $(".slider__top-img").attr("src", $(this).prop("href"))
	   return false;
	});
});
