window.onload = function(){
    
        console.log("here")
    
        console.log(sessionStorage.getItem('this_user'));
        let url = "./assets/php/index.php";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
      
          if(this.readyState === this.DONE && this.status === 200){
              
            let users = this.responseText;
            console.log(users)
          document.getElementById("welcome").innerHTML = users;
      
        }
        };
        //xhttp.open("POST",url);
        xhttp.open("GET", url + "?username=" + sessionStorage.getItem('this_user'));
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();
        //xhttp.send("username=" + sessionStorage.getItem('this_user'));
        // }
      


}