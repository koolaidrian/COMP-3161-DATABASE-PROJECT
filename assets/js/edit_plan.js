window.onload = function () {


}

function ready() {

    loadDay1Breakfast();
    loadDay2Breakfast();
    loadDay3Breakfast();
    loadDay4Breakfast();
    loadDay5Breakfast();
    loadDay6Breakfast();
    loadDay7Breakfast();

    loadDay1Lunch();
    loadDay2Lunch();
    loadDay3Lunch();
    loadDay4Lunch();
    loadDay5Lunch();
    loadDay6Lunch();
    loadDay7Lunch();

    loadDay1Dinner();
    loadDay2Dinner();
    loadDay3Dinner();
    loadDay4Dinner();
    loadDay5Dinner();
    loadDay6Dinner();
    loadDay7Dinner();

    document.addEventListener("click", function (e) {
        if (e.target && e.target.id == 'save-btn') {
            savePlan();
        }

    });

    document.addEventListener("click", function (e) {
        if (e.target && e.target.id == 'cancel') {
            location.assign("MealPlan.html");
        }

    });

}


function savePlan() {
    let url = "./assets/php/NewPlan.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            if (users === "Success") {
                sessionStorage.setItem('currMP', "");
                location.assign("MealPlan.html");
            } else {
                alert(users);
            }

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var d = document.getElementById("day1_breakfast");
    var d1b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day1_lunch");
    var d1l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day1_dinner");
    var d1d = d.options[d.selectedIndex].value;

    var d = document.getElementById("day2_breakfast");
    var d2b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day2_lunch");
    var d2l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day2_dinner");
    var d2d = d.options[d.selectedIndex].value;

    var d = document.getElementById("day3_breakfast");
    var d3b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day3_lunch");
    var d3l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day3_dinner");
    var d3d = d.options[d.selectedIndex].value;

    var d = document.getElementById("day4_breakfast");
    var d4b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day4_lunch");
    var d4l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day4_dinner");
    var d4d = d.options[d.selectedIndex].value;

    var d = document.getElementById("day5_breakfast");
    var d5b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day5_lunch");
    var d5l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day5_dinner");
    var d5d = d.options[d.selectedIndex].value;

    var d = document.getElementById("day6_breakfast");
    var d6b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day6_lunch");
    var d6l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day6_dinner");
    var d6d = d.options[d.selectedIndex].value;

    var d = document.getElementById("day7_breakfast");
    var d7b = d.options[d.selectedIndex].value;
    var d = document.getElementById("day7_lunch");
    var d7l = d.options[d.selectedIndex].value;
    var d = document.getElementById("day7_dinner");
    var d7d = d.options[d.selectedIndex].value;

    xhttp.send(
        "username=" + sessionStorage.getItem('this_user') +
        "&d1b=" + d1b + "&d1l=" + d1l + "&d1d=" + d1d +
        "&d2b=" + d2b + "&d2l=" + d2l + "&d2d=" + d2d +
        "&d3b=" + d3b + "&d3l=" + d3l + "&d3d=" + d3d +
        "&d4b=" + d4b + "&d4l=" + d4l + "&d4d=" + d4d +
        "&d5b=" + d5b + "&d5l=" + d5l + "&d5d=" + d5d +
        "&d6b=" + d6b + "&d6l=" + d6l + "&d6d=" + d6d +
        "&d7b=" + d6b + "&d7l=" + d7l + "&d7d=" + d7d +
       
    );
}

function loadDay1Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day1_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay2Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day2_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay3Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day3_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay4Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day4_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay5Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day5_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay6Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day6_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay7Breakfast() {
    let url = "./assets/php/LoadBreakfastMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day7_breakfast").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}

function loadDay1Lunch(){
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day1_lunch").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay2Lunch(){
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day2_lunch").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay3Lunch(){
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day3_lunch").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay4Lunch(){
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day4_lunch").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay5Lunch() {
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day5_lunch").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay6Lunch(){
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day6_lunch").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay7Lunch(){
    let url = "./assets/php/LoadLunchMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
        let users = this.responseText;
        //console.log(users)
      document.getElementById("day7_lunch").innerHTML = users;
  
    }
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}

function loadDay1Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day1_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay2Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day2_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay3Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day3_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay4Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day4_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay5Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day5_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay6Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day6_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}
function loadDay7Dinner() {
    let url = "./assets/php/LoadDinnerMeals.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day7_dinner").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') );
}
