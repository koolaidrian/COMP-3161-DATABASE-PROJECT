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
    
//$userID = test_input($_POST["user_id"]);
$userID = 1;

$stmt = $conn->query("call get_kitchen_inventory('$userID')");
//$stmt = $conn->query("exec get_kitchen_inventory $userID ");

$query = $stmt ->fetchall(PDO::FETCH_ASSOC);

if((sizeof($query)) < 1){

    echo("Your kitchen is empty :( Time to go shopping!");
 
} else {

    //show results in table
    //echo $query;
    //var_dump($query);

    //stolen code

    echo "<table>"; // start a table tag in the HTML
    echo "<tr><td>My Ingredients</td></tr>";

    for ($x = 0; $x < sizeof($query); $x+=1) {
        //var_dump($query[0]);
        echo "<tr><td>" . $query[$x]['ingredient_name'] . "</td></tr>";//
    }

    echo "</table>"; //Close the table in HTML

}
// echo("working as should");

?>
