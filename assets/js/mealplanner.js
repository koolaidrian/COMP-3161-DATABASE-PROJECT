window.onload = function(){
    let url = "./assets/php/Welcome.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            console.log(users)
            document.getElementById("welcome").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));

}
