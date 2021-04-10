<?php
session_start();

/*
if (isset($_SESSION['user'])){
    $user = $_SESSION["user"];
    //print_r($_SESSION);
}else{
    $user = "";
}
*/
$user = $_POST["username"];
$mpID = $_POST["currMP"];

//echo($user);
//echo 'working';
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

function test_input($data){
    $data = trim($data);
    $data = strip_tags($data);
	$data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
    
//$userID = test_input($_POST["user_id"]);


// TO-DO: get userID from their USERNAME
$stmt = $conn->query("call get_usr_id('$user')");
$result = $stmt ->fetchall(PDO::FETCH_ASSOC);


if((sizeof($result)) < 1){
    echo("No valid user logged in. Please log in again");

}else {

    $userID = $result[0]['usr_id'];

	//get meal plan's day7 daily_meal_id
	// Free stmt set
	$stmt = null;
	$stmt = $conn->query("call get_current_daily_meal_day7('$mpID')");
	if ($stmt){
		$daily = $stmt ->fetchall(PDO::FETCH_ASSOC);
		$dmID = $daily[0]['day7'];

		//get the daily_meal's meals
		// Free stmt set
		$stmt = null;
		$stmt = $conn->query("call get_daily_meal_meals('$dmID')");
		if ($stmt){
			$meals = $stmt ->fetchall(PDO::FETCH_ASSOC);

			//breakfast
			//get ingredients and measurements for each meal
			//IDS
			// Free stmt set
			$stmt = null;
			$breakfast = $meals[0]['breakfast'];
			$stmt = $conn->query("call get_recipe_info2('$breakfast')");
			if ($stmt){
				$info = $stmt ->fetchall(PDO::FETCH_ASSOC);
		
				foreach ($info as $getIngMea):
					//names
					// Free stmt set
					$stmt = null;
					$ig = $getIngMea['ingredient_id'];
					$stmt = $conn->query("call get_ingredient_name('$ig')");
					if ($stmt){
						$ing_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
							
						// Free stmt set
						$stmt = null;
						$ms = $getIngMea['measurement_id'];
						$stmt = $conn->query("call get_measurement_name('$ms')");
						if ($stmt){
							$mea_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
	
							$quan = $getIngMea['quantity'];
							?>
							<li><?= $quan ?> <?= $mea_name[0]['measurement_name'] ?> <?= $ing_name[0]['ingredient_name']; ?></li>
							<?php
						}else{
							echo ("Error: Cannot find measurement_name");
						}
					}else{
						echo ("Error: Cannot find ingredient_name");
					}
				endforeach;
			}else{
				echo ("Error: Cannot find recipe info");
			}

			//lunch
			//get ingredients and measurements for each meal
			//IDS
			// Free stmt set
			$stmt = null;
			$lunch = $meals[0]['lunch'];
			$stmt = $conn->query("call get_recipe_info2('$lunch')");
			if ($stmt){
				$info = $stmt ->fetchall(PDO::FETCH_ASSOC);
		
				foreach ($info as $getIngMea):
					//names
					// Free stmt set
					$stmt = null;
					$ig = $getIngMea['ingredient_id'];
					$stmt = $conn->query("call get_ingredient_name('$ig')");
					if ($stmt){
						$ing_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
							
						// Free stmt set
						$stmt = null;
						$ms = $getIngMea['measurement_id'];
						$stmt = $conn->query("call get_measurement_name('$ms')");
						if ($stmt){
							$mea_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
	
							$quan = $getIngMea['quantity'];
							?>
							<li><?= $quan ?> <?= $mea_name[0]['measurement_name'] ?> <?= $ing_name[0]['ingredient_name']; ?></li>
							<?php
						}else{
							echo ("Error: Cannot find measurement_name");
						}
					}else{
						echo ("Error: Cannot find ingredient_name");
					}
				endforeach;
			}else{
				echo ("Error: Cannot find recipe info");
			}

			//dinner
			//get ingredients and measurements for each meal
			//IDS
			// Free stmt set
			$stmt = null;
			$dinner =$meals[0]['dinner'];
			$stmt = $conn->query("call get_recipe_info2('$dinner')");
			if ($stmt){
				$info = $stmt ->fetchall(PDO::FETCH_ASSOC);
		
				foreach ($info as $getIngMea):
					//names
					// Free stmt set
					$stmt = null;
					$ig = $getIngMea['ingredient_id'];
					$stmt = $conn->query("call get_ingredient_name('$ig')");
					if ($stmt){
						$ing_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
							
						// Free stmt set
						$stmt = null;
						$ms = $getIngMea['measurement_id'];
						$stmt = $conn->query("call get_measurement_name('$ms')");
						if ($stmt){
							$mea_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
	
							$quan = $getIngMea['quantity'];
							?>
							<li><?= $quan ?> <?= $mea_name[0]['measurement_name'] ?> <?= $ing_name[0]['ingredient_name']; ?></li>
							<?php
						}else{
							echo ("Error: Cannot find measurement_name");
						}
					}else{
						echo ("Error: Cannot find ingredient_name");
					}
				endforeach;
			}else{
				echo ("Error: Cannot find recipe info");
			}
		}else{
			echo ("Error: Cannot find daily meal meals");
		}
	}else{
		echo ("Error: Cannot find day 7 daily_meal");
	}
}
?>