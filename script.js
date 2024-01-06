for (var i = 1; i < 10; i++) {
    var limit = 60;
    var textElement = document.getElementById("limitedText" + i);
    var text = textElement.textContent;
    var limitedText = text.split(" ").slice(0, limit).join(" ");
    textElement.textContent = limitedText + "...";
  }