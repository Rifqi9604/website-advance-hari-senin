document.addEventListener("DOMContentLoaded", function() {
    if(window.innerWidth < 500){
        alert("Please use a larger screen to view the website.")
        for (var i = 1; i < 10; i++) {
          var limit = 28;
          var textElement = document.getElementById("limitedText" + i);
      
          if (textElement) {
            var text = textElement.textContent.trim();
            var words = text.split(" ");
            var limitedText = words.slice(0, limit).join(" ");
      
            // Check if there are more words to display
            if (words.length > limit) {
              textElement.textContent = limitedText + "...";
            }
          }
        }
    }
  });
  