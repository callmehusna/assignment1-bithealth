function reverseString(text) {
    let arrText = text.split("")
    arrText = arrText.reverse()
    text = arrText.join("")
    return text
}
reverseString("HALLO")