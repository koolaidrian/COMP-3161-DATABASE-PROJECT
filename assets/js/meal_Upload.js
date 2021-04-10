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
    var mealInfo_next_btn = document.getElementById("mealInfo-next-btn");
    let recipe_ingredients_next_btn = document.getElementById("recipe-ingredients-next-btn");
    let meal_save_btn = document.getElementById("save-rep-btn");
    let prevButton = document.getElementsByClassName("btn btn btn-primary js-btn-prev");
    let nextButton = document.getElementsByClassName("btn btn btn-primary js-btn-next");

    //Adding event listeners for prv and next buttons --> Meant to change screens when prev and next buttons are clicked.

    mealInfo_next_btn.addEventListener("click",collectMealInfo());
    console.log("here");





    
   


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

    //-----------------------------------------------------------------------------------------------------------------------------------------

        // Upload file
    function uploadFile() {

        var files = document.getElementById("file").files;

        if(files.length > 0 )
        {

            var formData = new FormData();
            formData.append("file", files[0]);

            var xhttp = new XMLHttpRequest();

            // Set POST method and ajax file path
            xhttp.open("POST", "ajaxfile.php", true);

            // call on request changes state
            xhttp.onreadystatechange = function() 
            {
                if (this.readyState == 4 && this.status == 200) 
                {
                    var response = this.responseText;
                    if(response == 1)
                    {
                        alert("Upload successfully.");
                    }
                    else
                    {
                        alert("File not uploaded.");
                    }
                }
            };

            // Send request with data
            xhttp.send(formData);

        }
        else
        {
            alert("Please select a file");
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

    

    xhttp.open("POST",url);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("mealName=" + mealName + "&mealType=" + mealType + "&mealDesc=" + mealDesc + "&mealImage" + mealImage + "&ingredientQuantity=" + ingredientQuantity + "&ingredientMeasurement" + ingredientMeasurement + "&ingredientName" + ingredientName);

    }



} 


 //function collectMealInfo(mealName, mealType, mealDesc, mealImage)
 function collectMealInfo()
 {
     alert("I'm heree");
     //Getting all the data from the input fields and upload button
     console.log("Collect Meal Info under construction...");
     //Array.from(document.querySelectorAll('#form-content input mealimage')).reduce((acc, input) => ({ ...acc, [input.id]: input.value}), {});

 }

