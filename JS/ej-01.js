window.onload = function () {
    function displayLetter(letter) {
        var h3Element = document.getElementById("etiqueta1");
        h3Element.textContent = letter;
    }
    btn.onclick = function () {
        displayLetter ();
    }
}