<?php
session_start();


if (isset($_SESSION['user'])){
    $user = $_SESSION["user"];
    //print_r($_SESSION);
}else{
    $user = "";
}


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
$stmt = $conn->query("SELECT * FROM myuser WHERE usrname LIKE '%$user%'");
$result = $stmt ->fetchall(PDO::FETCH_ASSOC);


if((sizeof($result)) < 1){
    echo("No valid user logged in. Please log in again");

}else {

    $userID = $result[0]['usr_id'];




$stmt = $conn->query("call get_kitchen_inventory('$userID')");
//$stmt = $conn->query("exec get_kitchen_inventory $userID ");

$query = $stmt ->fetchall(PDO::FETCH_ASSOC);
//var_dump($query);

if((sizeof($query)) < 1){

    echo("Your kitchen is empty :( Time to go shopping!");
 
} else {



    //show results in table
    //echo $query;
    //var_dump($query);

    //stolen code

   // echo "<table>"; // start a table tag in the HTML
   // echo "<tr><td>My Ingredients</td></tr>";

    //for ($x = 0; $x < sizeof($query); $x+=1) {
        //var_dump($query[0]);
      //  echo "<tr><td>" . $query[$x]['ingredient_name'] . "</td></tr>";//
    //}

    //echo "</table>"; //Close the table in HTML


?>

<span style = "text-align:center;"><h1> Welcome <?php echo($user) ?> </h1></span>
<p> You have following ingredients in your kitchen </p>
<table id="Table">
    <thead>
        <tr class="heading-ingredients">
            <th id="ingredients">Ingredients List</th>
        </tr>
    </thead>

    <tbody>
      <?php foreach ($query as $ingredient): ?>
      <tr>
          <td><?= $ingredient['ingredient_name']; ?></td>
      </tr>
      <?php endforeach; ?>
    </tbody>


</table>


<?php
}
}
// echo("working as should");

?>