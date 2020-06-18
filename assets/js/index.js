$(document).ready(function(){

	// slider dark theme
	$(document).on('change', '.switch', function(){
		$("body").toggleClass("dark")
	});

	$(".btn-navbar").click(function(){
			$(".btn-navbar").removeClass('active').addClass('inactive');
			$(this).removeClass('inactive').addClass('active');
	});


})