$(document).ready(function(){
	$('.chat-application').height( $(window).height() - $('.navbar').height() - 90 );
	$(window).resize(function(){
	    $('.chat-application').height( $(window).height() - $('.navbar').height() - 100 );
	});

	if($('.chat-sidebar').length > 0){
		$('.chat-sidebar').perfectScrollbar();
	}
});
