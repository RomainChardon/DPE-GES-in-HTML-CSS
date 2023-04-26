function movedpe() {
    let input = document.getElementById("dpe-range").value;
   if (input < 50) {
       document.getElementById("my-value-cursor-dpe").style.top = "0px";
       document.getElementById("value-line").innerText = input + " - A";
   } else if (input < 90) {
       document.getElementById("my-value-cursor-dpe").style.top = "35px";
       document.getElementById("value-line").innerText = input + " - B";
   } else if (input < 150) {
       document.getElementById("my-value-cursor-dpe").style.top = "70px";
       document.getElementById("value-line").innerText = input + " - C";
   } else if (input < 230) {
       document.getElementById("my-value-cursor-dpe").style.top = "105px";
       document.getElementById("value-line").innerText = input + " - D";
   } else if (input < 330) {
       document.getElementById("my-value-cursor-dpe").style.top = "140px";
       document.getElementById("value-line").innerText = input + " - E";
   } else if (input < 450) {
       document.getElementById("my-value-cursor-dpe").style.top = "175px";
       document.getElementById("value-line").innerText = input + " - F";
   } else if (input > 450) {
       document.getElementById("my-value-cursor-dpe").style.top = "210px";
       document.getElementById("value-line").innerText = input + " - G";
   }
}

function moveges() {
    let input = document.getElementById("ges-range").value;
    if (input < 5) {
        document.getElementById("my-value-cursor-ges").style.top = "0px";
        document.getElementById("value-line-ges").innerText = input + " - A";
    } else if (input < 10) {
        document.getElementById("my-value-cursor-ges").style.top = "35px";
        document.getElementById("value-line-ges").innerText = input + " - B";
    } else if (input < 20) {
        document.getElementById("my-value-cursor-ges").style.top = "70px";
        document.getElementById("value-line-ges").innerText = input + " - C";
    } else if (input < 35) {
        document.getElementById("my-value-cursor-ges").style.top = "105px";
        document.getElementById("value-line-ges").innerText = input + " - D";
    } else if (input < 55) {
        document.getElementById("my-value-cursor-ges").style.top = "140px";
        document.getElementById("value-line-ges").innerText = input + " - E";
    } else if (input < 80) {
        document.getElementById("my-value-cursor-ges").style.top = "175px";
        document.getElementById("value-line-ges").innerText = input + " - F";
    } else if (input > 50) {
        document.getElementById("my-value-cursor-ges").style.top = "210px";
        document.getElementById("value-line-ges").innerText = input + " - G";
   }
}