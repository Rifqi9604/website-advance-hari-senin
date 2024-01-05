

for (var i = 1; i < 6; i++) {
  var limit = 40;
  var textElement = document.getElementById("limitedText" + i);
  var text = textElement.textContent;
  var limitedText = text.split(" ").slice(0, limit).join(" ");
  textElement.textContent = limitedText + "...";
}


for (var i = 6; i < 10; i++) {
    var limit = 40;
    var textElement = document.getElementById("limitedText" + i);
    var text = textElement.textContent;
    var limitedText = text.split(" ").slice(0, limit).join(" ");
    textElement.textContent = limitedText + "...";
  }
