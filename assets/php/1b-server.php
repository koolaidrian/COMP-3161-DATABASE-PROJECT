<?php
// (A) $_POST WILL CONTAIN ALL THE POSTED FORM DATA AS USUAL
print_r($_POST);

// (B) BUT $_POST['COLORS'] WILL BE AN ARRAY
foreach ($_POST['colors'] as $color) {
  echo $color . "<br>";
}