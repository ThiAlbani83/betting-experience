<?php

file_put_contents('log.txt', json_encode($_REQUEST), FILE_APPEND);

error_reporting(E_ALL);
ini_set('display_errors', 1);
// Increase these values at the top of your file
set_time_limit(60);
ini_set('max_execution_time', 60);

// CORS headers
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed_origins = [
  'https://bettingexperience.com.br/',
];

if (in_array($origin, $allowed_origins)) {
  header("Access-Control-Allow-Origin: $origin");
}

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
    file_put_contents('debug.log', "Received POST request: " . file_get_contents("php://input") . "\n", FILE_APPEND);
    $data = json_decode(file_get_contents("php://input"), true);
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.hostinger.com'; // Change to your SMTP server
        $mail->SMTPAuth   = true;
        $mail->Username   = 'contato@bettingexperience.com.br'; // Your email address
        $mail->Password   = 'I0kM|:;T~r6'; // App-specific password
        $mail->Port       = 465;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->SMTPDebug = 3; // Increase debug level
        $mail->Debugoutput = function($str, $level) {
            error_log("PHPMailer Debug: $str");
        };

        // Charset configuration
        $mail->CharSet = 'UTF-8';
        $mail->Encoding = 'base64';

        // Email settings
        $mail->setFrom('contato@bettingexperience.com.br', $data['name']);
        $mail->addReplyTo($data['email'], $data['name']);
        $mail->addAddress('contato@bettingexperience.com.br');

        $mail->isHTML(true);

        $mail->Subject = 'Usuário Cadastrado ' . $data['name'];
        $mail->Body    = 'Cliente: ' . $data['name'] . '<br>' . 'Telefone: ' . $data['phone'] . '<br>' . 'Email: ' . $data['email'] . '<br>' . 'Cargo: ' . nl2br($data['cargo']) . '<br>' . 'Segmento: ' . nl2br($data['segmento']);

        $mail->send();

        // enviar e-mail de confirmação para o cliente
        $mail->clearAddresses();
        $mail->setFrom('contato@bettingexperience.com.br', 'Equipe Betting Experience');
        $mail->addAddress($data['email']);

        $mail->Subject = 'Inscrição Confirmada';
        $mail->Body = 'Olá ' . $data['name'] . ', recebemos sua inscrição para o Betting Experience.<br/> Fique ligado para mais informações sobre o evento nos próximos dias. <br/><br/> Atenciosamente,<br/> Equipes Tropicalize & BetPass';

        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Failed to send email: {$mail->ErrorInfo}"]);
    }
}

// Add these right after the <?php
error_log("Request received at: " . date('Y-m-d H:i:s'));
error_log("Request data: " . file_get_contents("php://input"));
