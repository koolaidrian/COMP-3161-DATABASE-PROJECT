window.onload = function(){
    let url = "./assets/php/ShowRecipe.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            console.log(users)
            document.getElementById("show").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currRec=" + sessionStorage.getItem('currRec'));

}
