//adeten simvolun uzunluq limiti tetbiq edilir Bu zaman sert operatorundan istifade edilir
function funksiya3() {
  var value = document.getElementById("metn3").value;
  var uzunluq = value.length;
  if (uzunluq > 6) alert("icaze verilir.");
  else alert("parolun uzunlugu 6 simvoldan boyuk olmamilidir.");
}
