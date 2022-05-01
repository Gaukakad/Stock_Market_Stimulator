


function checkRefresh(){
    console.log(document.refreshForm.visited.value)
    if( document.refreshForm.visited.value == "" ){


	
    
		// This is a fresh page load
		document.refreshForm.visited.value = "1";
        console.log(document.refreshForm.visited.value)

		// You may want to add code here special for
		// fresh page loads
        
        $.ajax({
                type: "POST",
                url:  "fr",   
                data: {csrfmiddlewaretoken: '{{ csrf_token }}'}
                
               
        });
}
	else
	{
		// This is a page refresh

		// Insert code here representing what to do on
		// a refresh
	}

}


