$(document).ready(function(){
	$('.chat-application').height( $(window).height() - $('.navbar').height() - 100 );
	$(window).resize(function(){
	    $('.chat-application').height( $(window).height() - $('.navbar').height() - 100 );
	});

	$('.chat-app-content').height( $('.chat-app-window').height());



	if($('.chat-sidebar').length > 0){
		$('.chat-sidebar').perfectScrollbar();
	}
  if($('.chat-app-content'). length > 0){
	  $('.chat-app-content').perfectScrollbar();
  }
});
