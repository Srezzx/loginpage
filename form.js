var option = document.getElementById("option");


	$('#option').on("click",function(){
	if(document.querySelector("#option").value == "Log In")
	{
		$(".topbar").slideUp(250);	
		$(".topbar").slideDown(250);	
		$(".phonenumber").fadeOut(250);
		document.querySelector(".heading").textContent = "Log In";
 		document.querySelector(".textbelowheading").innerHTML= "Log In with your Credentials";
		document.querySelector("#option").value = "Sign Up";
	}
	else if(document.querySelector("#option").value == "Sign Up")
	{

		$(".topbar").slideUp(250);	
		$(".topbar").slideDown(250);
		$(".phonenumber").fadeIn(1000);
		document.querySelector(".heading").textContent = "Sign Up";
 		document.querySelector(".textbelowheading").innerHTML= "Sign Up with your Credentials";
		document.querySelector("#option").value = "Log In";
	}
});
