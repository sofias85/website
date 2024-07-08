
const images = [
    "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png",
    'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
    'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
    // Add more image URLs as needed
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');


images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery Image';
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.appendChild(img);
    gallery.appendChild(div);

   
    div.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.querySelector('img').src;
    }
});


document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}