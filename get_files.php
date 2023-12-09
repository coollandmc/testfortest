<?php

$uploadDir = 'uploads/';

$files = scandir($uploadDir);
$files = array_diff($files, ['.', '..']);

echo json_encode(array_values($files));

?>
