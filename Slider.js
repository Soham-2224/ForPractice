var sliderRange = document.getElementById('range');
var output = document.getElementById('op');
output.innerHTML = sliderRange.value;
sliderRange.oninput = function(){
    output.innerHTML = this.value;
}