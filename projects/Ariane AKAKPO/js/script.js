var colorBoxes = document.querySelectorAll('.color-box');
var selectedColor = document.getElementById('selected-color');
colorBoxes.forEach(function(colorBox) {
colorBox.addEventListener('click', function() {
    var color = window.getComputedStyle(colorBox).backgroundColor;
    selectedColor.style.backgroundColor = color;
});
});
