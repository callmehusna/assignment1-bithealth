let userInput = prompt("Enter the RIGHT password")
let rightPass = "RIGHT"
userInput == rightPass ? alert("YOU ARE RIGHT") : window.location.href = "http://google.com";
//----------------------------------------------
text = "";
for (let index = 0; index < 100; index++) {
    index % 5 == 4 ? text = text + " " : text = text + "O"
}
console.log(text)