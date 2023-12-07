// Simulated array to store file information
let filesArray = [];

function uploadFile() {
    const fileInput = document.getElementById('file-input');
    const fileList = document.getElementById('file-list');

    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');
        fileItem.setAttribute('data-file-index', filesArray.length);

        const fileName = document.createElement('p');
        fileName.innerText = `Name: ${file.name}`;

        const fileSize = document.createElement('p');
        fileSize.innerText = `Size: ${formatBytes(file.size)}`;

        const fileDescription = document.createElement('p');
        // You can add a description input field and set the value here

        const virusCheck = document.createElement('p');
        // You can implement virus check functionality here

        const downloadButton = document.createElement('button');
        downloadButton.innerText = 'Download';
        downloadButton.addEventListener('click', () => downloadFile(file));

        fileItem.appendChild(fileName);
        fileItem.appendChild(fileSize);
        fileItem.appendChild(fileDescription);
        fileItem.appendChild(virusCheck);
        fileItem.appendChild(downloadButton);

        fileList.appendChild(fileItem);

        // Store file information in the simulated array
        filesArray.push({
            name: file.name,
            size: file.size,
            description: '', // Add description here if needed
            virusCheck: '', // Add virus check info here if needed
        });
    }

    // Clear the file input
    fileInput.value = '';
}

function fileListClick(event) {
    const clickedElement = event.target;

    if (clickedElement.classList.contains('file-item')) {
        const fileIndex = clickedElement.getAttribute('data-file-index');
        const fileInfo = filesArray[fileIndex];

        alert(`File Info:\nName: ${fileInfo.name}\nSize: ${formatBytes(fileInfo.size)}`);
    }
}

function downloadFile(file) {
    // Simulated download functionality
    alert(`Simulated Download: ${file.name}`);
}

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
