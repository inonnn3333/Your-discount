let counter = 0; // some counter to get 5 mistakes.
let theButo = document.getElementById("buto");
let myInput = document.getElementById('theInput');
const opt = document.getElementById('options');
const sorryMsg = document.getElementById('sorry');
const rfrshMsg =document.getElementById('rfrsh');
const pass = ['111','222','333','444','555'];

/* attributes for the placeholder effect */
let i = 0;
let placeholder = "";
let txt = "You have 5 chances";
const speed = 120;
const chns = [5, 4, 3, 2, 1]

function type(){
    placeholder += txt.charAt(i)
    myInput.setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type, speed)
}

type();

myInput.addEventListener('click', function() {
    opt.style.display = "block";
    console.log("mouse-enter");
    setTimeout(() => {
        opt.style.display = "none";
    }, 3000);
})

theButo.addEventListener('click', function() {
        let chekIt = false;
        sorryMsg.style.display = "none"; //hide the "sorry massage"
        for (x = 0; x < pass.length; x++) {
            if (myInput.value == pass[x]) {
                chekIt = true; // some value if the password is false.
                this.innerHTML = "<div class='loader'></div>";
            setTimeout(() => {
                this.innerHTML = "YOU GOT IT!"; 
                this.style = "width: 38%; background: #E4682C; color: #333; pointer-events: none;"
            }, 2000);
            setTimeout(() => {
                rfrshMsg.style.display = "block";
            }, 3000);
            break;
            }

            if (x == 1) {
                txt = "You have 5 chances";
            }
        }

        /* what happend if the password wrong */
        if (chekIt == false) {
            this.innerHTML = "<div class='loader'></div>";
            setTimeout(() => {
                this.innerHTML = "CHECK IT OUT!";
                this.style = "padding: 0;"
                sorryMsg.style.display = "block";
                }, 2000);
                setTimeout(() => {
                    sorryMsg.style.display = "none";
                }, 5000);
                counter++;
        }

        /* a condition if the user have 5 mistakes */
        if (counter == 5) {
            theButo.disabled = true;
            setTimeout(() => {
                sorryMsg.style.display = "none";
                rfrshMsg.style = "display: block; color: red;";
                theButo.style = "background-color: #000; cursor: not-allowed;"
            }, 2000);
            
        }
    })

/* for () */