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

$d1b = $_POST["d1b"];
$d1l = $_POST["d1l"];
$d1d = $_POST["d1d"];

$d2b = $_POST["d2b"];
$d2l = $_POST["d2l"];
$d2d = $_POST["d2d"];

$d3b = $_POST["d3b"];
$d3l = $_POST["d3l"];
$d3d = $_POST["d3d"];

$d4b = $_POST["d4b"];
$d4l = $_POST["d4l"];
$d4d = $_POST["d4d"];

$d5b = $_POST["d5b"];
$d5l = $_POST["d5l"];
$d5d = $_POST["d5d"];

$d6b = $_POST["d6b"];
$d6l = $_POST["d6l"];
$d6d = $_POST["d6d"];

$d7b = $_POST["d7b"];
$d7l = $_POST["d7l"];
$d7d = $_POST["d7d"];


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
	
	//get num mealplans
	$stmt = null;
	$stmt = $conn -> query("call get_num_meal_plans()");
	if($stmt){
		$numMPq = $stmt -> fetchall(PDO:: FETCH_ASSOC);
		$numMP = $numMPq[0]["num_mealplans"];
		$x = strlen($numMP);
		$newMP = "";
		if ($x == 1){
			$newMP = "MP00000".$numMP;
		} elseif ($x == 2){
			$newMP = "MP0000".$numMP;
		}elseif ($x == 3){
			$newMP = "MP000".$numMP;
		} elseif ($x == 4){
			$newMP = "MP00".$numMP;
		} elseif ($x == 5){
			$newMP = "MP0".$numMP;
		}else {
			$newMP = "MP".$numMP;
		}
		
		//get num daily meals
		$stmt = null;
		$stmt = $conn -> query("call get_num_daily_meals()");
		if($stmt){
			$numDMq = $stmt -> fetchall(PDO:: FETCH_ASSOC);
			$numDM = $numDMq[0]["num_daily_meals"];
			$x = strlen($numDM);

			//create day1
			$newDay1 = "";
			if ($x == 1){
				$newDay1 = "DM00000".$numDM;
			} elseif ($x == 2){
				$newDay1 = "DM0000".strval($numDM);
			}elseif ($x == 3){
				$newDay1 = "DM000".$numDM;
			} elseif ($x == 4){
				$newDay1 = "DM00".$numDM;
			} elseif ($x == 5){
				$newDay1 = "DM0".$numDM;
			}else {
				$newDay1 = "DM".$numDM;
			}
			// Free stmt set
			$stmt = null;
			$stmt = $conn -> query("call create_daily_meal('$newDay1', '$d1b', '$d1l', '$d1d')");
			if ($stmt) {
				$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
				if (sizeof($curr)==0){
					//create day2
					$numDM = $numDM + 1;
					$x = strlen($numDM);
					$newDay2 = "";
					if ($x == 1){
						$newDay2 = "DM00000".$numDM;
					} elseif ($x == 2){
						$newDay2 = "DM0000".$numDM;
					}elseif ($x == 3){
						$newDay2 = "DM000".$numDM;
					} elseif ($x == 4){
						$newDay2 = "DM00".$numDM;
					} elseif ($x == 5){
						$newDay2 = "DM0".$numDM;
					}else {
						$newDay2 = "DM".$numDM;
					}
					// Free stmt set
					$stmt = null;
					$stmt = $conn -> query("call create_daily_meal('$newDay2', '$d2b', '$d2l', '$d2d')");
					if ($stmt) {
						$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
						if (sizeof($curr)==0){
							//create day3
							$numDM = $numDM + 1;
							$x = strlen($numDM);
							$newDay3 = "";
							if ($x == 1){
								$newDay3 = "DM00000".$numDM;
							} elseif ($x == 2){
								$newDay3 = "DM0000".$numDM;
							}elseif ($x == 3){
								$newDay3 = "DM000".$numDM;
							} elseif ($x == 4){
								$newDay3 = "DM00".$numDM;
							} elseif ($x == 5){
								$newDay3 = "DM0".$numDM;
							}else {
								$newDay3 = "DM" + $numDM;
							}
							// Free stmt set
							$stmt = null;
							$stmt = $conn -> query("call create_daily_meal('$newDay3', '$d3b', '$d3l', '$d3d')");
							if ($stmt) {
								$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
								if (sizeof($curr)==0){
									//create day4
									$numDM = $numDM + 1;
									$x = strlen($numDM);
									$newDay4 = "";
									if ($x == 1){
										$newDay4 = "DM00000".$numDM;
									} elseif ($x == 2){
										$newDay4 = "DM0000".$numDM;
									}elseif ($x == 3){
										$newDay4 = "DM000".$numDM;
									} elseif ($x == 4){
										$newDay4 = "DM00".$numDM;
									} elseif ($x == 5){
										$newDay4 = "DM0".$numDM;
									}else {
										$newDay4 = "DM".$numDM;
									}
									// Free stmt set
									$stmt = null;
									$stmt = $conn -> query("call create_daily_meal('$newDay4', '$d4b', '$d4l', '$d4d')");
									if ($stmt) {
										$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
										if (sizeof($curr)==0){
											//create day5
											$numDM = $numDM + 1;
											$x = strlen($numDM);
											$newDay5 = "";
											if ($x == 1){
												$newDay5 = "DM00000".$numDM;
											} elseif ($x == 2){
												$newDay5 = "DM0000".$numDM;
											}elseif ($x == 3){
												$newDay5 = "DM000".$numDM;
											} elseif ($x == 4){
												$newDay5 = "DM00".$numDM;
											} elseif ($x == 5){
												$newDay5 = "DM0".$numDM;
											}else {
												$newDay5 = "DM".$numDM;
											}
											// Free stmt set
											$stmt = null;
											$stmt = $conn -> query("call create_daily_meal('$newDay5', '$d5b', '$d5l', '$d5d')");
											if ($stmt) {
												$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
												if (sizeof($curr)==0){
													//create day6
													$numDM = $numDM + 1;
													$x = strlen($numDM);
													$newDay6 = "";
													if ($x == 1){
														$newDay6 = "DM00000".$numDM;
													} elseif ($x == 2){
														$newDay6 = "DM0000".$numDM;
													}elseif ($x == 3){
														$newDay6 = "DM000".$numDM;
													} elseif ($x == 4){
														$newDay6 = "DM00".$numDM;
													} elseif ($x == 5){
														$newDay6 = "DM0".$numDM;
													}else {
														$newDay6 = "DM".$numDM;
													}
													// Free stmt set
													$stmt = null;
													$stmt = $conn -> query("call create_daily_meal('$newDay6', '$d6b', '$d6l', '$d6d')");
													if ($stmt) {
														$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
														if (sizeof($curr)==0){
															//create day7
															$numDM = $numDM + 1;
															$x = strlen($numDM);
															$newDay7 = "";
															if ($x == 1){
																$newDay7 = "DM00000".$numDM;
															} elseif ($x == 2){
																$newDay7 = "DM0000".$numDM;
															}elseif ($x == 3){
																$newDay7 = "DM000".$numDM;
															} elseif ($x == 4){
																$newDay7 = "DM00".$numDM;
															} elseif ($x == 5){
																$newDay7 = "DM0".$numDM;
															}else {
																$newDay7 = "DM".$numDM;
															}
															// Free stmt set
															$stmt = null;
															$stmt = $conn -> query("call create_daily_meal('$newDay7', '$d7b', '$d7l', '$d7d')");
															if ($stmt) {
																$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
																if (sizeof($curr)==0){
																	// Free stmt set
																	$stmt = null;
																	$stmt = $conn -> query("call create_mealplan('$newMP', '$newDay1', '$newDay2', '$newDay3', '$newDay4', '$newDay5', '$newDay6', '$newDay7')");
																	if ($stmt) {
																		$curr = $stmt -> fetchall(PDO:: FETCH_ASSOC);
																		if (sizeof($curr)==0){
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
																			echo("Error with mealplan");
																		}
																	} else {
																		echo("Error: cannot create mealplan");
																	}
	 
																} else {
	
																	echo("Error with day7");
																}
															}else{
																echo("Error: cannot create day7");
															}
	 
														} else {
	
															echo("Error with day6");
														}
													}else{
														echo("Error: cannot create day6");
													}
	 
												} else {
	
													echo("Error with day5");
												}
											}else{
												echo("Error: cannot create day5");
											}
	 
										} else {
	
											echo("Error with day4");
										}
									}else{
										echo("Error: cannot create day4");
									}
	 
								} else {
	
									echo("Error with day3");
								}
							}else{
								echo("Error: cannot create day3");
							}
						} else {
	
							echo("Error with day2");
						}
					}else{
						echo("Error: cannot create day2");
					}
	 
				} else {
	
					echo("Error with day1");
				}
			}else{
				echo("Error: cannot create day1");
			}
		}else{
			echo("Error cannot get num_daily_meals");
		}
	}else{
		echo("Error:cannot get num_mealplans");
	}
}
?>