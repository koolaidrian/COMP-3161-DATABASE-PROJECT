<?php

    // response obj
    $resObj = new stdClass();
    
    if(isset($_FILES['file']['name']))
    {
        

        // file name
        $filename = $_FILES['file']['name'];
        $curr_usr = $_POST['curr_usr'];

        //print_r($filename);
        

        $recipeInstruction = $_POST["recipeInstruction"];

        $ingredientQty = $_POST["ingredientQty"];
        $ingredientMeasurement = $_POST["ingredientMeasurement"];
        $ingredientName = $_POST["ingredientName"];

        $mealName = $_POST['mealName'];
        $mealType = $_POST["mealType"];
        $mealDesc = $_POST["mealDesc"];
        $mealServing = $_POST["mealServing"];

        //$mealServing = $_POST["mealServing"];

        $imgPathDir = "./assets/php/uploads/";

        // print_r($mealName);
        // print_r($mealType);
        // print_r($mealDesc);
        // print_r($mealServing);

        // print_r($ingredientQty);
        // print_r($ingredientMeasurement);
        // print_r($ingredientName);

        // print_r($recipeInstruction);



        //$resObj -> mealName = $mealName;
    
        // Saving file image to uploads folder
        //print_r($mealName);
     
        // Location
        $location = 'uploads/'.$filename;

        $imgPath = $imgPathDir.$filename;
     
        // file extension
        $file_extension = pathinfo($location, PATHINFO_EXTENSION);
        $file_extension = strtolower($file_extension);
     
        // Valid extensions
        $valid_ext = array("jiff","jpg","png","jpeg");
     
        $response = 1;
        if(in_array($file_extension,$valid_ext))
        {
           // Upload file
           if(move_uploaded_file($_FILES['file']['tmp_name'],$location))
           {
              $response = 0;
           } 
        }
     

        // sending meal info to the database
        $host = "localhost";
        $username = "root";
        $password = "";
        $dbname = "mealplanner";



        try {
            $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
            //echo "Connected to $dbname at $host successfully.";
            // $conn = null;
        } catch (PDOException $pe) {
            die("Could not connect to the database $dbname :" . $pe->getMessage());
        }
        
        // declare database variables
        $stmt = null;

        // TO-DO: get userID from their USERNAME
        $stmt = $conn->query("call get_usr_id('$curr_usr')");
        $result = $stmt ->fetchall(PDO::FETCH_ASSOC);


        if((sizeof($result)) < 1){
            echo("No valid user logged in. Please log in again");

        }else {
            

            //Get User ID
            $userID = $result[0]['usr_id'];
            $stmt = null;
            

            //Insert Recipe
            // meal name , meal desc

            $stmt = $conn->prepare("INSERT INTO recipe(recipe_name, recipe_description) VALUES (:repName,:repDesc)");


            $stmt->bindParam('repName',$mealName);
            $stmt->bindParam('repDesc',$mealDesc);

            $stmt->execute();



            

            //Get Recipe ID
            $stmt = null;

            $stmt = $conn->query("SELECT recipe_id from recipe where recipe_name = '$mealName'");

            $query = $stmt ->fetchall(PDO::FETCH_ASSOC);
            if((sizeof($query)) < 1){
                $response = 1;
                exit;
            }

            $recipeID = $query[0]["recipe_id"];

            //echo($recipeID);


            
            //echo($ingredientName);
            //Get Ingredient ID
            $stmt = null;
            $query = null;
            //$stmt = $conn->query("call get_ingredient_id('$ingredientName')");
            $stmt = $conn->query("SELECT ingredient_id from ingredient where ingredient_name = '$ingredientName'");
            //$query = $stmt ->fetchall(PDO::FETCH_ASSOC);

            if($stmt){
                $query= $stmt ->fetchall(PDO::FETCH_ASSOC);
                $ingredientID = $query[0]["ingredient_id"];
                //echo($ingredientID);

            }else{
                $response = 1;
                exit;
            }

            

            //Get Measurement ID
            $stmt = null;
            $query = null;
            //$stmt = $conn->query("call get_measurement_id('$ingredientMeasurement')");
            $stmt = $conn->query("SELECT measurement_id from measurement where measurement_name = '$ingredientMeasurement'");
            $query = $stmt ->fetchall(PDO::FETCH_ASSOC);
            if((sizeof($query)) < 1){
                $response = 1;
                exit;
            }

            $measurementID = $query[0]["measurement_id"];

            //echo($measurementID);


            //Insert into Recipe_info
            // usr_id, recipe_id
            $stmt = null;
            $query = null;

            if($userID && $recipeID){

                $stmt = $conn->prepare("INSERT INTO recipe_info (usr_id, recipe_id) VALUES ($userID,$recipeID)");
                $stmt->bindParam('repName',$mealName);
                $stmt->bindParam('repDesc',$mealDesc);

               $stmt->execute();

            }else{
                $response = 1;
                exit;

            }


            //echo("recipe info added");

        


            //Insert into recipe instruction
            //recipe_id, step_id, recipeInstruction

            $stmt = null;
            $query = null;
            $stmt = $conn->prepare("INSERT INTO recipe_instruction(recipe_id, step_id, instruction) VALUES ($recipeID,'S0','$recipeInstruction')");
            //$stmt->bindParam('recipeID',$recipeID);
            //$stmt->bindParam('stepID',$stepID);
            //$stmt->bindParam('recipeInstruction',$recipeInstruction);


           $stmt->execute();
            //Get Step_id

            $stepID = "S0";

            //echo("recipe instruction added");


            


            //Insert recipe_ingredient
            //recipe_id,step_id, ingredient_id, measurement_id, quantity
            $stmt = null;
            $query = null;
            $ingredientQty = (int)$ingredientQty;
           $stmt = $conn->prepare("INSERT INTO recipe_ingredient(recipe_id,step_id, ingredient_id, measurement_id, quantity) VALUES ($recipeID,'$stepID','$ingredientID','$measurementID',$ingredientQty)");
           $stmt->execute();

           // if($stmt){


            //echo("recipe ingredient added");

            //}else {
            //    echo ("recipe ingredient wasn't added");
            //}
            




            //Insert meal 
            // meal_id, recipe_id, meal_name, meal_type, meal_image, servings
            $stmt = null;
            $query = null;

            $num = (int)$recipeID - 1;
            //echo($num);
            $mealID = "";


            //M000000
			if ($num < 10){
			$mealID = "M00000".$num;
			} elseif ($num < 100 ){
			$mealID = "M0000".$num;
			}elseif ($num < 1000){
			$mealID = "M000".$num;
			} elseif ($num < 10000){
			$mealID = "M00".$num;
		    } elseif ($num < 100000){
			$mealID = "M0".$num;
			}else {
			$mealID = "M".$num;
					}
            




            // echo($recipeID);
            // echo($mealID);

            $recipeID = (int)$recipeID;
            $mealServing = (int)$mealServing;


            $stmt = $conn->prepare("INSERT INTO meal (meal_id, recipe_id, meal_name, meal_type, meal_image, servings) VALUES ('$mealID',$recipeID,'$mealName','$mealType','$imgPath',$mealServing)");
            $stmt->execute();
            //$stmt ="INSERT INTO meal (meal_id, recipe_id, meal_name, meal_type, meal_image, servings) VALUES ('$mealID',$recipeID,'$mealName','$mealName','$imgPath',$mealServing)";
            //$conn->exec($stmt); 


            $resObj -> response = $response;
            $myJSON = json_encode($resObj);
            echo $myJSON;


        } 




        exit;
    }else{

        $resObj -> response = 1;
        $myJSON = json_encode($resObj);
        echo $myJSON;

    }

    
?>