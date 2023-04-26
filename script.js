function move() {
    let input = document.getElementById("dpe-range").value;
   if (input < 50) {
       document.getElementById("my-value").style.top = "0px";
       document.getElementById("value-line").innerText = input + " - A";
   } else if (input < 90) {
       document.getElementById("my-value").style.top = "35px";
       document.getElementById("value-line").innerText = input + " - B";
   } else if (input < 150) {
       document.getElementById("my-value").style.top = "70px";
       document.getElementById("value-line").innerText = input + " - C";
   } else if (input < 230) {
       document.getElementById("my-value").style.top = "105px";
       document.getElementById("value-line").innerText = input + " - D";
   } else if (input < 330) {
       document.getElementById("my-value").style.top = "140px";
       document.getElementById("value-line").innerText = input + " - E";
   } else if (input < 450) {
       document.getElementById("my-value").style.top = "175px";
       document.getElementById("value-line").innerText = input + " - F";
   } else if (input > 450) {
       document.getElementById("my-value").style.top = "210px";
       document.getElementById("value-line").innerText = input + " - G";
   }
}