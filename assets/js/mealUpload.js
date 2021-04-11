window.onload = function(){
    var mealInfo_next_btn = document.getElementById("mealInfo-next-btn");
    var recipe_ingredients_next_btn = document.getElementById("recipe-ingredients-next-btn");
    var meal_save_btn = document.getElementById("save-rep-btn");
    var igr_add_btn = document.getElementById("add-igr-btn");
    var igr_remove_btn = document.getElementById("remove-igr-btn");

    recipeInstruction = document.getElementById("rep-Instructions");

    var add_rep_ins_btn = document.getElementById("add-rep-ins-btn");
    var remove_rep_ins_btn = document.getElementById("remove-rep-ins-btn");

    
    
    

    // form data to be sent for meal upload
    var formData = new FormData();


    // Fields from recipe ingredients
    let ingredientQuantity = document.getElementById('ingredients-qty'); // Select type --> How to select the chosen value from a list of options (i.e. need to research)
    let ingredientMeasurement = document.getElementById('ingredients-measurement'); // Select type --> How to select the chosen value from a list of options (i.e. need to research)
    let ingredientName = document.getElementById('ingredients-name');

    let ingredientList = document.getElementById('ingredientList');
    let measurementList = document.getElementById('measurementList');

    // get items from database
    getIngredientListPHP(ingredientList);
    getMeasurementListPHP(measurementList);
        



    // Field upload conditions
    var mealInfoComplete = false;
    var recipeIngredientsComplete = false;
    var recipeInstructionComplete = false;

    // Recipe Instruction - Last Form from meal upload

    // Save button in meal plan - checks if fields satify upload conditions
    meal_save_btn.addEventListener("click",function(){
        alert("Saving your meal!");
        

        console.log(recipeInstruction.value);

        if (recipeInstruction.value.length > 0){

            recipeInstructionComplete = true;

            formData.append("recipeInstruction",recipeInstruction.value);




        }else{
            alert("Incomplete Instructions: Please enter all fields");
        }

        if (mealInfoComplete && recipeIngredientsComplete && recipeInstructionComplete){

            generateNewMealPHP(formData);

        }else{
            alert("Meal Upload Incomplete: Please fill out ALL fields");
        }


    });



    // add button from Recipe ingredient form - get the data from fields
    igr_add_btn.addEventListener("click",function(){

        if (ingredientQuantity.value.length > 0){

        console.log(ingredientQuantity.value);
        console.log(ingredientMeasurement.value);
        console.log(ingredientName.value);

        var text = ingredientQuantity.value + " " + ingredientMeasurement.value + " " + ingredientName.value;
        console.log(text);

        igr_list = document.getElementById("ingredients-list");

        igr_list.innerHTML = "";

        var node = document.createElement("LI");
       // var att = document.createAttribute("id"); // Create a <li> node
        //att.value = "igr-list" ;
        // mode.setAttributrNode(att);           
        var textnode = document.createTextNode(text);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        igr_list.appendChild(node);     // Append <li> to <ul> with id="myList"


        
        }else{
            alert("please enter value for quantity");
        }



    });

    // remove buttom from recipe ingredient - remove a ingredient from the div
    igr_remove_btn.addEventListener("click",function(){
        igr_list = document.getElementById("ingredients-list");

        igr_list.removeChild(igr_list.childNodes[0]);
        ingredientQuantity.value = '';
        ingredientMeasurement.value = '';
        ingredientName.value = ''

    });





    //--------------

    // add button from Recipe instruction form - get the data from fields
    add_rep_ins_btn.addEventListener("click",function(){

        if (recipeInstruction.value.length > 0){

        console.log(recipeInstruction.value);

        var text = recipeInstruction.value;
        console.log(text);

        instruction_list = document.getElementById("rep-instructions-list");

        instruction_list.innerHTML = "";

        var node = document.createElement("LI");
       // var att = document.createAttribute("id"); // Create a <li> node
        //att.value = "igr-list" ;
        // mode.setAttributrNode(att);           
        var textnode = document.createTextNode(text);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        instruction_list.appendChild(node);     // Append <li> to <ul> with id="myList"


        
        }else{
            alert("please enter value for instructions");
        }



    });

    // remove buttom from recipe instruction- remove a instruction from the div
    remove_rep_ins_btn.addEventListener("click",function(){
        instruction_list = document.getElementById("rep-instructions-list");

        instruction_list.removeChild(instruction_list.childNodes[0]);
        recipeInstruction.value = '';

    });


    //--------------
    
    

    // next button for Recipe Ingredient - second Form from meal upload - check if fields satify upload conditions
    recipe_ingredients_next_btn.addEventListener("click",function(){
        alert("Recipe ingredients time!");
        


        var newOption = document.createElement("option");
        newOption.text = "Sausage";

        ingredientList.appendChild(newOption);

        //ingredientName.add(newOption);

        if (ingredientQuantity.value.length > 0){

            recipeIngredientsComplete = true;

            formData.append("ingredientQty",ingredientQuantity.value);
            formData.append("ingredientMeasurement",ingredientMeasurement.value);
            formData.append("ingredientName",ingredientName.value);


        }else{

            alert("Incomplete: Please enter all fields");

        }

        



    });
    

    
    mealInfo_next_btn.addEventListener("click",function(){

    let mealName = document.getElementById('mealName');
    let mealType = document.getElementById('mealType'); // Select type --> How to select the chosen value from a list of options (i.e. need to research)
    let mealDesc = document.getElementById('mealDescription');
    let mealImage = document.getElementById('mealImage').files;
    let mealServing = document.getElementById('mealServing');


    if (mealImage.length > 0){
        console.log("Image received");

        
        formData.append("file", mealImage[0]);
        formData.append("mealName",mealName.value);
        formData.append("mealType",mealType.value);
        formData.append("mealDesc",mealDesc.value);
        formData.append("mealServing",mealServing.value);

        mealInfoComplete = true;

        //generateNewMealPHP(formData);





    }else{
        alert("Incomplete: Please enter all fields");
    }
    
    mealName.value;
    mealType.value;
    mealDesc.value;
    //mealImage;




      alert("checking clicks");

        //let username = document.getElementById("username").value;
        //let password = document.getElementById("password").value;

        console.log(mealName.value);
        console.log(mealType.value);
        console.log(mealDesc.value);
        //console.log("name - " ,mealImage.name);
        console.log("pw - ",);

        //validateLoginPHP(username,password);

    }); 



    function generateNewMealPHP(formData){
        //console.log("user = ", username);
        //console.log("pw - ", password);

        if (mealInfoComplete && recipeIngredientsComplete && recipeInstructionComplete){
            alert("gonna process");
            console.log(formData);
            curr_usr = sessionStorage.getItem('this_user');
            formData.append("curr_usr",curr_usr);
            
            let url = "./assets/php/mealUpload.php";
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){

            if(this.readyState === this.DONE && this.status === 200){

                let response = JSON.parse(this.responseText);

                console.log(response);

                if(response.response == "0"){
                alert("meal added succesfully!");
                }else if (response.response == "1"){
                alert("meal was not added :(");
                }else{
                    alert("error occurred.");
                }
            }
            };

            xhttp.open("POST",url);
            //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(formData);

            //location.assign(url);

        }else{
            alert("form incomplete! MealUpload was not process.");
        }

        

      }

      function getIngredientListPHP(ingredientList){
        //console.log("user = ", username);
        //console.log("pw - ", password);


        obj = { "limit" : 10};
        dbParam = JSON.stringify(obj);


        let url = "./assets/php/getIngredientList.php";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

        if(this.readyState === this.DONE && this.status === 200){

                let ingredients = JSON.parse(this.responseText);

                console.log(ingredients);

                for (item in ingredients){
                    var newOption = document.createElement("option");
                    newOption.text = ingredients[item].ingredient_name;

                    ingredientList.appendChild(newOption);
                    console.log(item);
                }

                
            }
            };

        //xhttp.open("POST",url);
        xhttp.open("GET", url + "?ingredientLim=" + dbParam, true);
        //xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();

        

        

      }


      function getMeasurementListPHP(measurementList){
        //console.log("user = ", username);
        //console.log("pw - ", password);


        obj = { "limit" : 10};
        dbParam = JSON.stringify(obj);


        let url = "./assets/php/getMeasurementList.php";
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){

        if(this.readyState === this.DONE && this.status === 200){

                let measurements = JSON.parse(this.responseText);

                console.log(measurements);

                for (item in measurements){
                    var newOption = document.createElement("option");
                    newOption.text = measurements[item].measurement_name;

                    measurementList.appendChild(newOption);
                    console.log(item);
                }

                
            }
            };

        //xhttp.open("POST",url);
        xhttp.open("GET", url + "?measurementLim=" + dbParam, true);
        //xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();


      }




}

