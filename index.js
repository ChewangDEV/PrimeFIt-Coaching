const message = ["PrimeFit Coaching","Transform Your Body","Build Your Confidence","Book Now!", "Limited Seat Available."];

let index = 0;

function changeText(){
    document.getElementById("head").innerHTML = message[index];
    index = (index + 1) % message.length;

    setTimeout(changeText, 3000);
}
changeText();