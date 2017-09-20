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
    var counter = 0;
	function myFunction(value, name)
	{


	if(counter<10){
    	counter++;
    $('#item-count').html(counter);
		total+=value;
		console.log(total);
		 document.getElementById("test").innerHTML=total;
		 $(".product").append("<span>"+name+"<br>"+value+"\
                          <i id='cancel-btn-"+counter+"' class='fa fa-times' aria-hidden='true' style='float: right; display:inline;' onclick=removeItem('#cancel-btn-"+counter+"',"+ value+")></i><hr>\
                        </span>");
  }
	else{
		alert("you can't add more than nine")
		}
	}
function removeItem(ele, value){
  // console.log(value);
  $(ele).parent().remove();
  if(counter > 0){
    total-=value;
    counter--;
  }
  console.log(total);
  document.getElementById("test").innerHTML=total;
  $('#item-count').html(counter);
} 
//END
