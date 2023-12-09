<?php
if ($_FILES['file']['error'] === 0) {
    // Define the upload directory
    $uploadDir = 'uploads/';

    // Create the directory if it doesn't exist
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    // Generate a unique filename
    $filename = $uploadDir . uniqid() . '_' . basename($_FILES['file']['name']);

    // Move the uploaded file to the specified directory
    if (move_uploaded_file($_FILES['file']['tmp_name'], $filename)) {
        // Redirect to the main page after successful upload
        header('Location: index.html');
        exit;
    } else {
        echo 'Error uploading the file.';
    }
} else {
    echo 'Error: ' . $_FILES['file']['error'];
}
?>
