window.onload = function () {
    sessionStorage.setItem('currMP', "");
    let url = "./assets/php/FindCurrentMealPlan.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            if (users === "Error") {
                getNoCurrentSetup();
            } else if (users === "Not found") {
                getNoCurrentSetup();
                document.addEventListener("click", function (e) {
                    if (e.target && e.target.id == 'past') {
                        location.assign("PastMealPlans.html");
                    } else if (e.target && e.target.id == 'new') {
                        if (sessionStorage.getItem('currMP') == "") {
                            location.assign("NewPlan.html");
                        } else {
                            alert("not eligible");
                        }
                    } else if (e.target && e.target.id == 'complete') {
                        if (sessionStorage.getItem('currMP') !== "") {
                            completePlan();
                        } else { }
                    } else if (e.target && e.target.id == 'cancel') {
                        if (sessionStorage.getItem('currMP') !== "") {
                            cancelPlan();
                        } else { }
                    } else if (e.target && e.target.id == 'delete') {
                        if (sessionStorage.getItem('currMP') !== "") {
                            deletePlan();
                        } else { }
                    } else if (e.target && e.target.id == 'edit') {
                        if (sessionStorage.getItem('currMP') !== "") {
                            location.assign("EditMealPlan.html");
                        } else { }
                    } else { }
                });
            } else {
                sessionStorage.setItem('currMP', users);
                ready();
            }

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));

}

function ready() {
    getRange();
    getDay1();
    getDay2();
    getDay3();
    getDay4();
    getDay5();
    getDay6();
    getDay7();
    getDay1Ingredients();
    getDay2Ingredients();
    getDay3Ingredients();
    getDay4Ingredients();
    getDay5Ingredients();
    getDay6Ingredients();
    getDay7Ingredients();
    getAllIngredients();
    
    document.addEventListener("click", function (e) {
        if (e.target && e.target.className == 'morebtn') {
            sessionStorage.setItem('currMeal', e.target.id);
            location.assign("MealDetails.html");
        } else if (e.target && e.target.id == 'past') {
            location.assign("PastMealPlans.html");
        } else if (e.target && e.target.id == 'new') {
            if (sessionStorage.getItem('currMP') == "") {
                location.assign("NewPlan.html");
            } else {
                alert("not eligible");
            }
        } else if (e.target && e.target.id == 'complete') {
            if (sessionStorage.getItem('currMP') !== "") {
                completePlan();
            } else { }
        } else if (e.target && e.target.id == 'cancel') {
            if (sessionStorage.getItem('currMP') !== "") {
                cancelPlan();
            } else { }
        } else if (e.target && e.target.id == 'delete') {
            if (sessionStorage.getItem('currMP') !== "") {
                deletePlan();
            } else { }
        } else if (e.target && e.target.id == 'edit') {
            if (sessionStorage.getItem('currMP') !== "") {
                location.assign("EditMealPlan.html");
            } else { }
        } else { }

    });


}


function completePlan() {
    let url = "./assets/php/CompletePlan.php";
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
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function cancelPlan() {
    let url = "./assets/php/CancelPlan.php";
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
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function deletePlan() {
    let url = "./assets/php/DeletePlan.php";
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
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getRange() { 
    let url = "./assets/php/GetRange.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("range").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getNoCurrentSetup() {
    let url = "./assets/php/NoCurrentMealPlan.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("theplan").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}

function getDay1(){
	let url = "./assets/php/ViewDay1.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
  
      if(this.readyState === this.DONE && this.status === 200){
          
        let users = this.responseText;
        //console.log(users)
      document.getElementById("Day1").innerHTML = users;
  
    }
    };
    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay2() {
    let url = "./assets/php/ViewDay2.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("Day2").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay3() {
    let url = "./assets/php/ViewDay3.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("Day3").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay4() {
    let url = "./assets/php/ViewDay4.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("Day4").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay5() {
    let url = "./assets/php/ViewDay5.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("Day5").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay6() {
    let url = "./assets/php/ViewDay6.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("Day6").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay7() {
    let url = "./assets/php/ViewDay7.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("Day7").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay1Ingredients() {
    let url = "./assets/php/ViewDay1Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day1_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay2Ingredients() {
    let url = "./assets/php/ViewDay2Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day2_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay3Ingredients() {
    let url = "./assets/php/ViewDay3Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day3_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay4Ingredients() {
    let url = "./assets/php/ViewDay4Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day4_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay5Ingredients() {
    let url = "./assets/php/ViewDay5Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day5_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
} 

function getDay6Ingredients() {
    let url = "./assets/php/ViewDay6Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day6_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getDay7Ingredients() {
    let url = "./assets/php/ViewDay7Ingredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("day7_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}

function getAllIngredients() {
    let url = "./assets/php/ViewAllIngredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            //console.log(users)
            document.getElementById("all_ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currMP=" + sessionStorage.getItem('currMP'));
}