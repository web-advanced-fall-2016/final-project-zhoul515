
//adapted from Queness - infinity carousel

$(document).ready(function() {

	//rotation speed and timer
	var speed = 6000;
	var run = setInterval('rotate()', speed);	
	
	//grab the width and calculate left value
	var item_width = $('#Images li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    //move the last item before first item, just in case user click prev button
	$('#Images li:first').before($('#Images li:last'));
	
	//set the default item to the correct position 
	$('#Images ul').css({'left' : left_value});

    //if user clicked on prev button
	$('#prev').click(function() {

		//get the right position            
		var left_indent = parseInt($('#Images ul').css('left')) + item_width;

		//slide the item            
		$('#Images ul:not(:animated)').animate({'left' : left_indent}, 100,function(){    

            //move the last item and put it as first item            	
			$('#Images li:first').before($('#Images li:last'));           

			//set the default item to correct position
			$('#Images ul').css({'left' : left_value});
		
		});

		//cancel the link behavior            
		return false;
            
	});

 
    //if user clicked on next button
	$('#next').click(function() {
		
		//get the right position
		var left_indent = parseInt($('#Images ul').css('left')) - item_width;
		
		//slide the item
		$('#Images ul:not(:animated)').animate({'left' : left_indent}, 100, function () {
            
            //move the first item and put it as last item
			$('#Images li:last').after($('#Images li:first'));                 	
			
			//set the default item to correct position
			$('#Images ul').css({'left' : left_value});
		
		});
		         
		//cancel the link behavior
		return false;
		
	});        
	
	//if mouse hover, pause the auto rotation, otherwise rotate it
	$('#Images').hover(
		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	); 
        
});

function rotate() {
	$('#next').click();
}