document.addEventListener("DOMContentLoaded", function() {
    for (var i = 1; i < 10; i++) {
      var limit = 25;
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
  });
  