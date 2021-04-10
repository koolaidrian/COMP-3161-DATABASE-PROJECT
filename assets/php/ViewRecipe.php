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
$meal_id = $_POST["currMeal"];
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


// TO-DO: 
$stmt = $conn->query("call get_recipe_info1('$meal_id')");
$result = $stmt ->fetchall(PDO::FETCH_ASSOC);


if((sizeof($result)) < 1){

	echo("No such meal exists. Try again");
	 
} else {
	
	// Free stmt set
	$stmt = null;
	$stmt = $conn->query("call get_recipe_info2('$meal_id')");
	$query = $stmt ->fetchall(PDO::FETCH_ASSOC);

	// Free stmt set
	$stmt = null;
	$stmt = $conn->query("call get_meal_calories('$meal_id')");
	$tCalories = $stmt ->fetchall(PDO::FETCH_ASSOC);
?>

	<div class="row">
		<div class="col-md-12">
			<div>
				<h2 id="result-mealName"><?= $result[0]['meal_name']; ?></h2>
				<img id="result-mealImage" src=<?= $result[0]['meal_image']; ?> style="max-height: 300px;">
				<p id="result-mealType">Meal Type: <?= $result[0]['meal_type']; ?></p>
				<p id="result-mealCreationDate">Date created: <?= $result[0]['dte_created']; ?></p>
				<p id="result-mealCreationDate">Calories: <?= $tCalories[0]['cal']; ?></p>
				<p id="result-mealDescLabel">Recipe Description:</p>
				<p id="result-mealDesc"><?= $result[0]['recipe_description']; ?></p>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-6">
			<div>
				<table class="table" id="result-Ingredients">
					<thead>
						<tr class="heading-ingredients">
							<th id="ingredients">Ingredients </th>
						</tr>
					</thead>

					<tbody>
					  <?php foreach ($query as $getIngredient): ?>
					  <tr>
							<?php
							// Free stmt set
							$stmt = null;
							$ig = $getIngredient['ingredient_id'];
							$stmt = $conn->query("call get_ingredient_name('$ig')");
							$ing_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
							
							// Free stmt set
							$stmt = null;
							$ms = $getIngredient['measurement_id'];
							$stmt = $conn->query("call get_measurement_name('$ms')");
							$mea_name = $stmt ->fetchall(PDO::FETCH_ASSOC);
							?>
						  <td><?= $getIngredient['quantity'] ?> <?=$mea_name[0]['measurement_name'] ?> <?=$ing_name[0]['ingredient_name']; ?></td>
					  </tr>
					  <?php endforeach; ?>
					</tbody>
				</table>
			</div>
		</div>
		<div class="col-md-6">
			<div>
				<table class="table" id="result-Instructions">
					<thead>
						<tr class="heading-instructions">
							<th id="instructions">Instructions </th>
						</tr>
					</thead>

					<tbody>
					  <?php foreach ($result as $getInstruction): ?>
					  <tr>
						  <td><?= $getInstruction['instruction']; ?></td>
					  </tr>
					  <?php endforeach; ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
<?php
}
?>
