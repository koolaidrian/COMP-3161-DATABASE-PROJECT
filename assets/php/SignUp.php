<?php
echo 'working';
$host = "localhost";
$username = "root";
$password = "";
$dbname = "mealplanner";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    echo "Connected to $dbname at $host successfully.";
    // $conn = null;
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}


$stmt = $conn->prepare("INSERT INTO myuser(usrname,pssword,email,age,weight,height,calorie_goal) VALUES (:Username,:Password,:Email,:Age,:Weight,:Height,:CalGoal)");


$stmt->bindParam('Username',$userUserName);
$stmt->bindParam('Password',$userPW);
$stmt->bindParam('Email',$userEmail);
$stmt->bindParam('Age',$userAge);
$stmt->bindParam('Height',$userHeight);
$stmt->bindParam('Weight',$userWeight);
$stmt->bindParam('CalGoal',$userCalGoal);


function test_input($data){
    $data = trim($data);
    $data = strip_tags($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

$userUserName = test_input($_POST["username"]);
$userPW = test_input($_POST["password"]);
$userEmail = test_input($_POST["email"]);
$userAge = test_input($_POST["age"]);
$userHeight = test_input($_POST["height"]);
$userWeight = test_input($_POST["weight"]);
$userCalGoal = test_input($_POST["calGoal"]);


$stmt->execute();

echo $userUserName;

?>