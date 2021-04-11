<?php
header("Content-Type: application/json; charset=UTF-8");
$obj = json_decode($_GET["measurementLim"], false);

//print_r($obj);

$host = "localhost";
$username = "root";
$password = "";
$dbname = "mealplanner";

$limit = $obj->limit;


try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    //echo "Connected to $dbname at $host successfully.";
    // $conn = null;
} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}

//$conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");

$stmt = $conn->query("SELECT measurement_name FROM measurement LIMIT $limit");
//$stmt->bindParam("Lim", $limit);
//$stmt->execute();

//var_dump($stmt);

//$result = $stmt->get_result();
//var_dump($result);
$outp = $stmt ->fetchall(PDO::FETCH_ASSOC);



echo json_encode($outp);
?>