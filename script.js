var limit = 30; // Ganti dengan jumlah kata yang diinginkan

for (var i = 1; i <= 6; i++) {
  var textElement = document.getElementById("limitedText" + i);
  var text = textElement.textContent;
  var limitedText = text.split(" ").slice(0, limit).join(" ");
  textElement.textContent = limitedText + '...';
}