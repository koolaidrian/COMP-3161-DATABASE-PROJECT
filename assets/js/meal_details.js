
window.onload = function(){

	console.log(sessionStorage.getItem('currMeal'));
    let url = "./assets/php/ViewRecipe.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
        let users = this.responseText;
        console.log(users)
      document.getElementById("information").innerHTML = users;
  
		}
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("currMeal=" + sessionStorage.getItem('currMeal'));
  }