$(document).ready(() => {
    $("#smartwizard3").smartWizard({
        selected: 0,
        transitionEffect: "fade",
        toolbarSettings: {
            toolbarPosition: "none",
        },
        anchorSettings: {
            enableAllAnchors: true, // Activates all anchors clickable all times
        },
    });

    // External Button Events
    $("#reset-btn22").on("click", function () {
        // Reset wizard
        $("#smartwizard3").smartWizard("reset");
        return true;
    });

    $("#prev-btn22").on("click", function () {
        // Navigate previous
        $("#smartwizard3").smartWizard("prev");
        return true;
    });

    $("#next-btn22").on("click", function () {
        // Navigate next
        $("#smartwizard3").smartWizard("next");
        return true;
    });
});

// script.js

function previewImage() {
  const fileInput = document.getElementById('imageUpload');
  const file = fileInput.files[0];
  const uploadBox = document.getElementById('uploadBox');
  const imagePreview = document.getElementById('imagePreview');

  if (file) {
    const reader = new FileReader();

    reader.onload = function(e) {
      const image = document.createElement('img');
      image.src = e.target.result;
      image.alt = 'Preview';
      image.classList.add('uploaded-image');
      
      // Clear previous preview
      imagePreview.innerHTML = '';
      
      // Append the new image preview
      imagePreview.appendChild(image);
    };

    reader.readAsDataURL(file);
  } else {
    // Clear the preview if no file selected
    imagePreview.innerHTML = '';
  }
}



