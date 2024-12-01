function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
}

function addPhoto() {
    const url = document.getElementById('photoUrl').value;
    if (url) {
        const photoGallery = document.getElementById('photoGallery');
        const imgElement = document.createElement('div');
        imgElement.innerHTML = `<img src="${url}" alt="Photo">
                                <button onclick="this.parentNode.remove()">Supprimer</button>`;
        photoGallery.appendChild(imgElement);
        document.getElementById('photoUrl').value = '';
    }
}

function addVideo() {
    const url = document.getElementById('videoUrl').value;
    if (url) {
        const videoGallery = document.getElementById('videoGallery');
        const iframeElement = document.createElement('div');
        iframeElement.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>
                                   <button onclick="this.parentNode.remove()">Supprimer</button>`;
        videoGallery.appendChild(iframeElement);
        document.getElementById('videoUrl').value = '';
    }
}
