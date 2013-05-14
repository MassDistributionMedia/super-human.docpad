$ ->
	$("#hack-wiki, #hello-world_wiki, #donate-home-popover, #help-home-popover, #blog-title").popover()

	$(window).scroll ->
		if $(this).scrollTop() > 77
			$(".close-header").removeClass('hide').addClass 'block'
		else
			$(".close-header").removeClass('block').addClass 'hide'
			
		if $(this).scrollTop() is 0	
			$(".navbar").css "display", 'block'  

	$('#site_info-popo, #mdm-popo').popover()

	$(".close-header").click ->
		$(".navbar").toggle()
