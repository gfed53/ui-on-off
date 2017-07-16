// jshint esversion: 6

$(function(){
	console.log('running');
	let triggered = false;

	$('#handle').on('click', function(e){
		console.log(this,'was clicked');
		$('#handle').addClass('clicked');
		setTimeout(()=>{
			$('#handle').removeClass('clicked');
		}, 500);
		
		$('#bulb').toggleClass('triggered');

		$('.inner-text-on').toggle();
		$('.inner-text-off').toggle();
		// $('.inner-text').html() === 'OFF' ? $('.inner-text').html('ON') : $('.inner-text').html('OFF');
	});
});