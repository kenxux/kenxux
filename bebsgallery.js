fetch('/Photos.json')
  .then(response => response.json())
  .then(data => {
    // Process the array of image URLs
    data.forEach(imageUrl => {
      // Create an <img> element for each image
      const img = document.createElement('img');
      img.src = imageUrl;

      // Append the <img> element to the container
      document.getElementById('image-container').appendChild(img);
    });
  })
  .catch(error => {
    console.error('Error');
  })