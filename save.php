<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "SpaceExploration";
$name = $_POST["name"];
$age = $_POST["age"];
$gender = $_POST["gender"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$qualification = $_POST["qualification"];
$experience = $_POST["experience"];
$con = new mysqli($server, $username, $password, $dbname);
if(mysqli_connect_error())
{
    die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
}
else
{
    $SELECT = "SELECT email From applicants Where email = ? Limit 1";
    $INSERT = "INSERT Into applicants(name,age,gender,email,phone,qualification,experience) values(?,?,?,?,?,?,?)"; 
    $stmt = $con->prepare($SELECT);
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->bind_result($email);
    $rnum = $stmt->num_rows;
    if($rnum==0)
    {
        $stmt->close();
        $stmt = $con->prepare($INSERT);
        $stmt->bind_param("sisssss",$name,$age,$gender,$email,$phone,$qualification,$experience);
        $stmt->execute();
        echo "Successfull! We will contact you soon";
        header("Location: mannedmission.html");
    }
    else
    {
        echo "Someone already registered using this email";
    }
}
?>