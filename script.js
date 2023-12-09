function uploadFile() {
    let fileInput = document.getElementById('fileInput');
    let fileList = document.getElementById('fileList');

    let file = fileInput.files[0];
    if (!file) {
        alert('Please select a file');
        return;
    }

    if (file.size > 1024 * 1024 * 1) {
        alert('File size must be less than 1GB');
        return;
    }

    let formData = new FormData();
    formData.append('file', file);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            getFileList();
        } else {
            alert('File upload failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
}

function getFileList() {
    let fileList = document.getElementById('fileList');

    fetch('get_files.php')
    .then(response => response.json())
    .then(data => {
        fileList.innerHTML = '<h2>Files Available for Download</h2>';
        if (data.length > 0) {
            data.forEach(file => {
                let link = document.createElement('a');
                link.href = 'uploads/' + file;
                link.download = file;
                link.textContent = file;
                fileList.appendChild(link);
                fileList.appendChild(document.createElement('br'));
            });
        } else {
            fileList.innerHTML += '<p>No files available</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred');
    });
}

// Load file list on page load
getFileList();
