        
// Retrieve DOM elements
        let image = document.getElementById("image1");
        let suivant = document.getElementById("suivant");
        let precedent = document.getElementById("precedent");

        // Create an array containing the image URLs
        let imageUrls = [
            "Images/Photo by a NEOM on Unsplash.jpg",
            "Images/Photo by Josh Hild on Unsplash.jpg",
            "Images/Photo by Leif Christoph Gottwald on Unsplash.jpg",
            "Images/Photo by Mehdi MeSSrro on Unsplash.jpg",
            "Images/Photo by Samuel Regan-Asante on Unsplash.jpg"
        ];

        // Create a variable to indicate the current image index
        let currentImageIndex = 0;

        // Function to display the current image
        function displayImage() {
            image.src = imageUrls[currentImageIndex];
        }

        // Function to go to the next image
        function nextImage() {
            currentImageIndex++;
            if (currentImageIndex >= imageUrls.length) {
                currentImageIndex = 0;
            }
            displayImage();
        }

        // Function to go to the previous image
        function previousImage() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = imageUrls.length - 1;
            }
            displayImage();
        }

        // Event listener for the next button
        suivant.addEventListener("click", nextImage);

        // Event listener for the previous button
        precedent.addEventListener("click", previousImage);

        // Display the first image
        displayImage();