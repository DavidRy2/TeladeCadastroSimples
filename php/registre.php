<?php

include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    
    if ($password != $confirmPassword) {
        echo "As senhas não coincidem. Tente novamente.";
        exit;
    }

    // Validar o e-mail (opcional)
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "E-mail inválido.";
        exit;
    }
 
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

   
    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashedPassword')";

    if ($conn->query($sql) === TRUE) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro ao cadastrar: " . $conn->error;
    }
    
    $conn->close();
}
?>
