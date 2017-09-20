// This is for List and Grid 

listButton = $('button.list-view');
gridButton = $('button.grid-view');
wrapper = $('div.wrapper');



listButton.on('click',function(){
	
  gridButton.removeClass('on');
  listButton.addClass('on');
  wrapper.removeClass('grid').addClass('list');
  
});

gridButton.on('click',function(){
	
  listButton.removeClass('on');
  gridButton.addClass('on');
  wrapper.removeClass('list').addClass('grid');
  
});

//END

// This is For Adding to Cart and Calculating total Billing Amount

var total=0;
    var counter = 1;
	function myFunction(value, name)
	{


	if(counter<10){
    	counter++;
		total+=value;
		console.log(total);
		 document.getElementById("test").innerHTML=total;
		 $(".product").append("<p>"+name+"</p>");

		 $(".product").append("<p>"+value+"</p><hr>");
		}
	else{
		alert("you can't add more than nine")
		}
	}
//END
