$(document).ready(function(){
	 $( "#sf-logo" ).fadeIn( 1000 , function() {
  });


	var coolSound = false;
	function playCool () {
  	coolSound = !coolSound;
  		if (coolSound) {
    		//$('#theme-song')[0].pause();
    		// $('#cool')[0].load()
    		$('#pose-sound')[0].play();
  		}
	}


	$('body').keydown(function(event){
		if(event.keyCode == 88){
			playCool();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();

		}
	})	
	$('body').keyup(function(event){
		if(event.keyCode == 88){
			$('#pose-sound')[0].pause();
      		$('#pose-sound')[0].load();
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').show();
			
		}
	})	

	$('body').keydown(function(event){
		if(event.keyCode == 74){
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').hide();
			$('.ryu-jump').show();
		}
	})	
	$('body').keyup(function(event){
		if(event.keyCode == 74){
			$('.ryu-jump').hide();
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-still').show();
			
		}
	})	

	$('.warrior').mouseenter(function(){
		$('.warrior-still').hide();
		$('.warrior-ready').show();
	})
	.mouseleave(function(){
		$('.warrior-ready').hide();
		$('.warrior-still').show();
	})

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.warrior-still').hide();
		$('.warrior-attack').show();
		$('.hadouken').finish().show().animate(
  			{'left': '300px'},
  			500,
  				function() {
    			$(this).hide();
    			$(this).css('left', '-212px');
  		}
  	);

	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
		$('.warrior-attack').hide();
		$('.warrior-still').show();
		//ryu goes back to ready position
	});

});

function playTheme () {
  $('#theme-song')[0].volume = 0.5;
  $('#theme-song')[0].load();
  $('#theme-song')[0].play();
}


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}