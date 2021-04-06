/* Meal Upload still being worked on... */

window.onload = function()
{

    console.log("Meal upload starting...");

    let url = "meal_Upload.php";
    
    /* window.onload = function()
    {
        console.log("function under construction");
        //Array.from(document.querySelectorAll('#form-content-1 input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});
    }  */



    let mealName = document.getElementById('mealName');
    let mealType = document.getElementById('mealType'); // Select type --> How to select the chosen value from a list of options (i.e. need to research)
    let mealDesc = document.getElementById('mealDesc');
    let mealImage = document.getElementById('mealImage');

    let ingredientQuantity = document.getElementById('ingredients-qty'); // Select type --> How to select the chosen value from a list of options (i.e. need to research)
    let ingredientMeasurement = document.getElementById('ingredients-measurement'); // Select type --> How to select the chosen value from a list of options (i.e. need to research)
    let ingredientName = document.getElementById('ingredients-name');

    // Buttons to change screens
    let prevButton = document.getElementsByClassName("btn btn btn-primary js-btn-prev");
    let nextButton = document.getElementsByClassName("btn btn btn-primary js-btn-next");

    //Adding event listeners for prv and next buttons --> Meant to change screens when prev and next buttons are clicked.
    





    
    function collectMealInfo(mealName, mealType, mealDesc, mealImage)
    {
        //Getting all the data from the input fields and upload button
        console.log("Collect Meal Info under construction...");
        //Array.from(document.querySelectorAll('#form-content input mealimage')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});

    }


    function collectRecipeIngredients()
    {
        console.log("Collect Recipe Info under construction...");
        //Array.from(document.querySelectorAll('#form-content-1 input')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});

        //Add ingredients button
        function addIngredients(ingredientQuantity, ingredientMeasurement, ingredientName)
        {
            //Storing the quantity, measurement and name of an ingredient in an array.
            console.log("Add Ingredients under construction...");
            let lst_Of_Ingredients = [];

        }

        //Remove ingredients button
        function removeIngredients()
        {
            //Removing a particular ingredient from the array.
            console.log("Remove Ingredients under construction...");
            //let recipeInstructions = [];
        }


    }


    function collectRecipeInstructions()
    {
        console.log("Collect Recipe Instruction under construction...");


        //Adding an step for a recipe
        function addInstruction()
        {
            console.log("Add instruction currently being worked on...");
        }

        //Removing a step for a recipe
        function removeInstruction()
        {
            console.log("Remove instruction currently being worked on...");
        }


    }


    function saveMeal()
    {
        console.log("Save meal is currently being constructed");
    }


    function phpmysqlconnect(mealName, mealType, mealDesc, mealImage, ingredientQuantity, ingredientMeasurement, ingredientName)
    {

        let url = "./assets/php/meal_Upload.php";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function()
        {

          if(this.readyState === this.DONE && this.status === 200)
          {
            location.assign("./index.html");
          }
        };

    }

    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("mealName=" + mealName + "&mealType=" + mealType + "&mealDesc=" + mealDesc + "&mealImage" + mealImage + "&ingredientQuantity=" + ingredientQuantity + "&ingredientMeasurement" + ingredientMeasurement + "&ingredientName" + ingredientName);





} 


