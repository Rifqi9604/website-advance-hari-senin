document.addEventListener("DOMContentLoaded", function() {
    for (let i = 1; i < 10; i++) {
      let limit = 28;
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
    let saveButton = document.getElementById('saveButton');
    let iconImage = document.getElementById('iconImage');

    // Daftar gambar yang akan digunakan
    let imageList = [
        "./assets/images/icon/save-instagram.png",
        "./assets/images/icon/save-instagram-clicked.png"
    ];

    let currentIndex = 0;

    
    saveButton.addEventListener('click', function() {
        iconImage.src = imageList[currentIndex];
        currentIndex = (currentIndex + 1) % imageList.length;
    });
});

  