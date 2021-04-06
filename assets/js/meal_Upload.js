window.onload = function(){

    console.log("Meal upload starting...");

    let url = "meal_upload.php";
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    /* 
    function collectMealInfo()
    {
        //Getting all the data from the input fields and upload button
        Array.from(document.querySelectorAll('#form-content input mealimage')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
    }

    function collectRecipeIngredients()
    {
        console.log("function under construction");
        //Array.from(document.querySelectorAll('#form-content-1 input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
    } */
}