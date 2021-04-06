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
	// Free stmt set
	$stmt = null;
	
	$stmt = $conn->query("call get_usr_dinner_meals('$userID')");
	if ($stmt) {
		$query = $stmt ->fetchall(PDO::FETCH_ASSOC);
		if (sizeof($query)<1){
			?><p>You haven't added any dinner meals yet :( Time to start experimenting!</p><?php
		}else{
			?>
			<div class="card-group">
			<?php foreach ($query as $meal): ?>
				<div class="card"><img class="card-img-top w-100 d-block" src=<?= $meal['meal_image']; ?>>
					<div class="card-body">
						<h4 class="card-title"><?= $meal['meal_name']; ?></h4>
						<p class="card-text"><?= $meal['recipe_description']; ?></p><button class='morebtn' id='<?=$meal['meal_id'] ?>' type="button" href="/MealDetails.html">More</button>
					</div>
				</div>
			<?php endforeach; ?>
			</div> <?php
		}
	}
	else {
		?>
		<p>You haven't added any dinner meals yet :( Time to start experimenting!</p>
		<?php 
	}
}

?>