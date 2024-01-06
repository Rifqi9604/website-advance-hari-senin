document.addEventListener("DOMContentLoaded", function() {
    if(window.innerWidth < 768){
    for (let i = 1; i <= 6; i++) {
      let limit = 20;
      let textElement = document.getElementById("limitedText" + i);
  
      if (textElement) {
        let text = textElement.textContent.trim();
        let words = text.split(" ");
        let limitedText = words.slice(0, limit).join(" ");
  
        if (words.length > limit) {
          textElement.textContent = limitedText + "...";
        }
      }
    }

}
}); 

  document.addEventListener("DOMContentLoaded", function() {
    for (let i = 7; i <= 10000; i++) {
      let limit = 25;
      let textElement = document.getElementById("limitedText" + i);
  
      if (textElement) {
        let text = textElement.textContent.trim();
        let words = text.split(" ");
        let limitedText = words.slice(0, limit).join(" ");
  
        if (words.length > limit) {
          textElement.textContent = limitedText + "...";
        }
      }
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    // Daftar gambar yang akan digunakan
    let imageList = [
        "./assets/images/icon/save-instagram.png",
        "./assets/images/icon/save-instagram-clicked.png"
    ];

    for (let i = 1; i <= 10000; i++) {
        let saveButton = document.getElementById(`saveButton${i}`);
        let iconImage = document.getElementById(`iconImage${i}`);

        if (saveButton && iconImage) {
            setupSaveButton(saveButton, iconImage, imageList);
        }
    }
});

function setupSaveButton(saveButton, iconImage, imageList) {
    let currentIndex = 0;

    saveButton.addEventListener('click', function() {
        iconImage.src = imageList[currentIndex];
        currentIndex = (currentIndex + 1) % imageList.length;
    });
}

  