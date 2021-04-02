<?php
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
    
    $userUsername = test_input($_POST["username"]);
    $userPW = test_input($_POST["password"]);

    $stmt = $conn->query("SELECT Username,Password FROM User WHERE Username = '$userUsername'");

    $query = $stmt ->fetchall(PDO::FETCH_ASSOC);
//var_dump($query);

    if((sizeof($query)) < 1){

        echo("User not found");
      
      }elseif(!(( $userPW == $query[0]["Password"]) == true)){
        echo("invalid password");
      }else{
      $user = $query[0]["Username"];
      $_SESSION["user"] = $user;


      }
      // echo("working as should");






?>