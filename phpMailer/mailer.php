<?php

file_put_contents('log.txt', json_encode($_REQUEST), FILE_APPEND);

error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
  'http://localhost:5173/',
  'https://tropicalize.com/privacy-policy',
  'https://tropicalize.com/security-information-policy',
];

header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Credentials: true");

header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle OPTIONS preflight requests (CORS preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Autoload PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Change to your SMTP server (like Gmail)
        $mail->SMTPAuth   = true;
        $mail->Username   = 'tropicalize.br@gmail.com'; // Your Gmail address
        $mail->Password   = 'wkrd mfzl vdky mlim'; // App-specific password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Charset configuration
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        // Email settings
        $mail->setFrom($data['email'], $data['name']);
        $mail->addAddress('tropicalize.br@gmail.com');

        $mail->isHTML(true);

        $mail->Subject = 'Nova mensagem de ' . $data['name'];
        $mail->Body    = 'Cliente: ' . $data['name'] . '<br>' . 'Telefone: ' . $data['phone'] . '<br>' . 'Email: ' . $data['email'] . '<br><br>' . 'Mensagem: ' . nl2br($data['message']);

        $mail->send();

        // enviar e-mail de confirmação para o cliente
        $mail->clearAddresses();
        $mail->setFrom('tropicalize.br@gmail.com', 'Equipe Tropicalize.co');
        $mail->addAddress($data['email']);

        $mail->Subject = 'Recebemos sua mensagem - Tropicalize.co';
        $mail->Body = 'Olá ' . $data['name'] . ', recebemos sua mensagem.<br/> Em breve nossa equipe entrará em contato.<br/><br/> Atenciosamente,<br/> Equipe Tropicalize.co';

        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Failed to send email: {$mail->ErrorInfo}"]);
    }
}
