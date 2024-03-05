//parolun daxil edilmesi

function funksiya4() {
  var x = document.getElementById("metn2").value;
  if (x == "orxan88") alert("Parol dogrudur.");
  else alert("Parol yalnisdir.");
}

function funksiya5() {
  var x = document.getElementById("metn5").value;
  if (x == "soyad") alert("daxil ola bilersiniz");
  else alert("daxil olmaq qeyri-mumkun");
}

//parol daxil olunan zaman borderin rengi cavaba gore tenzimlenir

function funksiya() {
  var x = document.getElementById("metn").value;
  if (x == "orxan88") {
    document.getElementById("metn").style.borderColor = "green";
  } else {
    document.getElementById("metn").style.borderColor = "red";
  }
}
