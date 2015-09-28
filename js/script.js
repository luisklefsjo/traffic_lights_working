// FUNCTIONS
function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = 'red';
}
function illuminateOrange() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "orange";
}
function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}


// BINDINGS
document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateOrange;
document.getElementById('goButton').onclick = illuminateGreen;

//  DEFAULT
illuminateGreen();












//
