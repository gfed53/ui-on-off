// jshint esversion: 6

$(function(){
	console.log('running');
	let triggered = false;

	$('#handle').on('click', function(e){
		console.log(this,'was clicked');
		$('#handle').addClass('clicked');
		setTimeout(()=>{
			
			$('#bulb').toggleClass('triggered');
			$('.inner-text-on').toggle();
			$('.inner-text-off').toggle();

			//Light up room
			$('body').toggleClass('luminate');
		}, 250);

		setTimeout(()=> {
			$('#handle').removeClass('clicked');
		}, 500);
	});
});