var option = document.getElementById("option");


	$('#option').on("click",function(){
	if(document.querySelector("#option").value == "Log In")
	{
		$(".topbar").fadeTo(125,0.5);	
		$(".topbar").fadeTo(125,1.0);	
		$(".phonenumber").fadeOut(250,function(){
			document.querySelector(".heading").textContent = "Log In";
 			document.querySelector(".textbelowheading").innerHTML= "Log In with your Credentials";
			document.querySelector("#option").value = "Sign Up";
		});
		
	}
	else if(document.querySelector("#option").value == "Sign Up")
	{

		$(".topbar").fadeTo(125,0.5);	
		$(".topbar").fadeTo(125,1.0);	
		$(".phonenumber").fadeIn(1000,function(){
			
		});
		document.querySelector(".heading").textContent = "Sign Up";
 		document.querySelector(".textbelowheading").innerHTML= "Sign Up with your Credentials";
		document.querySelector("#option").value = "Log In";
	
	}
});
