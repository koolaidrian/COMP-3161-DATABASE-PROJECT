
window.onload = function(){
    console.log("here")


    let url = "./assets/php/ViewInventory.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
  
        let users = this.responseText;
        console.log(users)
      document.getElementById("result-ingredients").innerHTML = users;
  
    }
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    // }
  }