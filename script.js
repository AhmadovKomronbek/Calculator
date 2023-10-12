let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll("span");
let value = document.getElementById("value");

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click" , function () {
        var sound = new Audio("click-button-140881.mp3");
        sound.play();
        if (this.innerHTML == "=") {
            value.innerHTML = eval(value.innerHTML);
        } else {
            if (this.innerHTML == "Clear") {
                value.innerHTML = "";
            } else {
                value.innerHTML += this.innerHTML;
            }
        }
    })
    
}


var array = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "00" , "+" , "-" , "/" , "*" , "="];
document.addEventListener("keypress" , function (event) {
        for (let i = 0; i < array.length; i++) {
            if (event.key == array[i]) {
                if (event.key == "=") {
                    value.innerHTML = eval(value.innerHTML);
                }
                else if (event.key == "c") {
                    value.innerHTML = "";
                }
                else {
                    console.log(event.key);
                    value.innerHTML += event.key;
                }
            }
        }
})
