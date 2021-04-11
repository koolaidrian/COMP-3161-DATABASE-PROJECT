window.onload = function(){
    console.log("checking");
    var signUpbutton1 = document.getElementById("signUp-btn1");
    signUpbutton1.addEventListener("click", function(){
      let url = "mealplanner.php";
      let username = document.getElementById('username').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      //let pw = document.getElementById('password-repeat').value;
      let passwordrepeat = document.getElementById('password-repeat').value;
      console.log(username);
      console.log(email);
      console.log(password);
      console.log(passwordrepeat);

      console.log("pw-repeat",passwordrepeat);
      signUpInfo();
      /*let country = document.getElementById("country").value;
      //let cities = document.getElementById("cities").value;
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if(this.readyState === this.DONE && this.status === 200){
          let result = document.getElementById("result");
          result.innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", url + "?country=" + country + "&context=" ); // + "&context=" + cities);
      xhttp.send(); */
    });



    function signUpInfo() {
      let pw = document.getElementById('password-repeat');
        //console.log("outside - ", pw.value);
        //location.assign("./SignUp2.html");
        document.getElementById("firstForm").style.display = "none";
        document.getElementById("secondForm").style.display = "block";
        document.getElementById("formPic").style.display = "table-cell";
        document.getElementById("formPic").style.width = "55%";
      // document.getElementById("formPic").style.display = "none";
        signUpbutton2 = document.getElementById("signUp-btn2");

        signUpbutton2.addEventListener("click", function(){
          //document.getElementById("firstForm").style.display = "block";
          
          let url = "./assets/php/SignUp.php";
          let age = document.getElementById('age').value;
          let weight = document.getElementById('weight').value;
          let height = document.getElementById('height').value;
          let calGoal = document.getElementById('calGoal').value;
          console.log("username",username.value);
          console.log("email",email.value);
          console.log("pw",password.value);
          //console.log("pw-repeat",passwordrepeat);
          console.log("age", age);
          console.log("weight",weight);
          console.log("height",height);
          console.log("calGoal",calGoal);

          phpmysqlconnect(username.value,password.value,email.value,age,weight,height,calGoal);

         // location.assign("./assets/php/SignUp.php");
          //xhttp.open("POST",url);

         // signUpInfo();
          /*let country = document.getElementById("country").value;
          //let cities = document.getElementById("cities").value;
          let xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function(){
            if(this.readyState === this.DONE && this.status === 200){
              let result = document.getElementById("result");
              result.innerHTML = this.responseText;
            }
          };
          xhttp.open("GET", url + "?country=" + country + "&context=" ); // + "&context=" + cities);
          xhttp.send(); */
        });


    }



    function phpmysqlconnect(username,password,email,age,weight,height,calGoal){

      let url = "./assets/php/SignUp.php";
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){

        if(this.readyState === this.DONE && this.status === 200){

          let response = this.responseText;
          sessionStorage.setItem('this_user', response);

          location.assign("Login.html");


        }
      };

      xhttp.open("POST",url);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("username=" + username+ "&password=" + password + "&email=" + email + "&age=" + age + "&weight=" + weight + "&height=" +height + "&calGoal=" + calGoal);

    }


    

}