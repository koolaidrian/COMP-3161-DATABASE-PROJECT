<?php

session_start();
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
    //$userPW2 = $_POST["password"];
    //$userUsername = test_input('kelly8');
    //$userPW = test_input('+mMUeJrk2z');


    $stmt = $conn->query("SELECT usrname,pssword FROM myuser WHERE usrname = '$userUsername'");

    $query = $stmt ->fetchall(PDO::FETCH_ASSOC);
//var_dump($query);

    if((sizeof($query)) < 1){

        echo("User not found");
      
      }elseif(!(( $userPW == $query[0]["pssword"]) == true)){
       
        echo("invalid password");
      }elseif((( $userPW == $query[0]["pssword"]) == true)){
        echo("valid user");
        $user = $query[0]["usrname"];
      $_SESSION["user"] = $user;
      }else{

        echo("invalid user");
    

      }
      // echo("working as should");






?>