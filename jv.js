function changeText() {
  const textArray = ["Welcome to M5 Cafe", "The Heart of Coffee", "Brewing Happiness", "Sip, Savor, Smile", " A Hug in a Mug"];
  const textElement = document.getElementById("myText");
  const randomText = textArray[Math.floor(Math.random() * textArray.length)];
  textElement.textContent = randomText;
}


setInterval(changeText, 3000); 