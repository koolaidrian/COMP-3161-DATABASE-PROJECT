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

	$start = date("Y-m-d");
	$end = ("2021-04-10");
	
	//get random meal plans
	$stmt = null;
	$stmt = $conn -> query("call get_num_meal_plans()");
	if ($stmt){
		$numMPq = $stmt -> fetchall(PDO:: FETCH_ASSOC);
		$numMP = $numMPq[0]["num_mealplans"];
		$y = strlen($numMP);
		$x = rand(0,$y);
		$y = strlen($x);

		$newMP = "";
		if ($y == 1){
			$newMP = "MP00000".$x;
		} else if ($y == 2){
			$newMP = "MP0000".$x;
		}else if ($y == 3){
			$newMP = "MP000".$x;
		} else if ($y == 4){
			$newMP = "MP00".$x;
		} else if ($y == 5){
			$newMP = "MP0".$x;
		}else {
			$newMP = "MP".$x;
		}

		// Free stmt set
		$stmt = null;
		$stmt = $conn -> query("call assign_meal_plan('$newMP', 'current', '$userID', '$start', '$end')");
		if ($stmt) {
			$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
			if (sizeof($curr)==0){
				echo("Success");
			}else{
				echo("Error with assigning mealplan");
			}
		} else {
			echo("Error: cannot assign mealplan");
		}
	}else{
		echo ("Error");
	}
																
}
?>