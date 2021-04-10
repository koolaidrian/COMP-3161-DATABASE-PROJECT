
window.onload = function () {

    showIngredients();

    uploadIngredients();

    document.addEventListener("click", function (e) {
        if (e.target && e.target.id == 'add_igr_btn') {
            var d = document.getElementById("selections");
            var strIng = d.options[d.selectedIndex].value;
            if (strIng) {
                if (strIng == "" || strIng == " ") { }
                else {
                    sessionStorage.setItem('currIng', strIng);
                    addIngredient();
                }
            } else { }
        }

    });

    document.addEventListener("click", function (e) {
        if (e.target && e.target.id == 'remove_igr_btn') {
            var d = document.getElementById("selections");
            var strIng = d.options[d.selectedIndex].value;
            if (strIng) {
                if (strIng == "" || strIng == " ") { }
                else {
                    sessionStorage.setItem('currIng', strIng);
                    removeIngredient();
                }
            } else { }
        }

    });

}

function showIngredients() {
    let url = "./assets/php/ViewInventory.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            console.log(users)
            document.getElementById("result-ingredients").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user'));
}

function uploadIngredients() {

    let url = "./assets/php/UploadIngredients.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            console.log(users);
            document.getElementById("selections").innerHTML = users;

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
}

function addIngredient() {

    let url = "./assets/php/AddKitchenIngredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            if (users == "Success") {
                location.assign("KitchenInventory.html");
            } else {
                alert(users);
            }

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currIng=" + sessionStorage.getItem('currIng'));
}

function removeIngredient() {

    let url = "./assets/php/RemoveKitchenIngredient.php";
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState === this.DONE && this.status === 200) {

            let users = this.responseText;
            if (users == "Success") {
                location.assign("KitchenInventory.html");
            } else {
                alert(users);
            }

        }
    };
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("username=" + sessionStorage.getItem('this_user') + "&currIng=" + sessionStorage.getItem('currIng'));
}
