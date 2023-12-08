var galleryImages = ["../images/forest.jpg", "../images/color-swatch.jpg"];
        var currentImageIndex = 0;

        function showPreviousImage() {
            currentImageIndex--;
            if (currentImageIndex < 0) {
                currentImageIndex = galleryImages.length - 1;
            }
            document.getElementById("image").src = galleryImages[currentImageIndex];
        }

        function showNextImage() {
            currentImageIndex++;
            if (currentImageIndex >= galleryImages.length) {
                currentImageIndex = 0;
            }
            document.getElementById("image").src = galleryImages[currentImageIndex];
        }