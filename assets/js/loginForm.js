window.onload = function(){
    var loginbtn = document.getElementById("loginbtn");

    loginbtn.addEventListener("click",function(){

      alert("checking clicks");

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        console.log("user = ", username);
        console.log("pw - ", password);
        //location.assign("signUp.html");
        validateLoginPHP(username,password);

    });


    function validateLoginPHP(username,password){
        //console.log("user = ", username);
        //console.log("pw - ", password);

        let url = "./assets/php/login.php";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

          if(this.readyState === this.DONE && this.status === 200){

            let response = this.responseText;

            console.log(response);

            if(response == "User not found"){
              alert(response);
            }else if (response == "invalid password"){
              alert(response);
            }else{
                sessionStorage.setItem('this_user', username);
		        console.log(sessionStorage.getItem('this_user'));
                location.assign("index.html");
            }
          }
        };

        xhttp.open("POST",url);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("username=" + username + "&password=" + password);

      }


}
