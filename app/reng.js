//renglerin seciminin tenzimlenmesi

function color() {
  var color = document.getElementById("color").value;
  document.getElementById("body").style.backgroundColor = color;
}

function colorBtn() {
  let color = document.getElementById("colorInput").value;
  let div1 = document.getElementById("divColor");
  div1.style.width = "300px";
  div1.style.height = "300px";
  div1.style.display = "block";
  div1.style.backgroundColor = color;
}
