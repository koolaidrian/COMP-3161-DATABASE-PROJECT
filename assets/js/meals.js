window.onload = function(){

	getBreakfast();
	getLunch();
	getDinner();
	
	document.addEventListener("click",function(e){
		if(e.target && e.target.className== 'morebtn'){
          sessionStorage.setItem('currMeal', e.target.id);
		  location.assign("MealDetails.html");
		}
		
	});
}

function getBreakfast(){
	let url = "./assets/php/ViewBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
        let users = this.responseText;
        //console.log(users)
      document.getElementById("breakfastCards").innerHTML = users;
  
    }
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}

function getLunch(){
	let url = "./assets/php/ViewLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
        let users = this.responseText;
        //console.log(users)
      document.getElementById("lunchCards").innerHTML = users;
  
    }
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));}

function getDinner(){
	let url = "./assets/php/ViewDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
        let users = this.responseText;
        //console.log(users)
      document.getElementById("dinnerCards").innerHTML = users;
  
    }
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));}
