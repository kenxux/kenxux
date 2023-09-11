window.addEventListener('DOMContentLoaded', function() {
    var photoGallery = document.getElementById('photo-gallery');
  
    // Replace 'path/to/photos' with the actual path to your photo folder
    var photoFolderPath = 'Photos/';
  
    // Replace the array of file names with the actual file names of your photos
    var photoFileNames = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];
  
    photoFileNames.forEach(function(fileName) {
      var img = document.createElement('img');
      img.src = photoFolderPath + fileName;
      photoGallery.appendChild(img);
    });
  });