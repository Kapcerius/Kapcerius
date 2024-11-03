const Omaewa = new Audio();
Omaewa.src = "nani_Pmxf5n3.mp3";

const balonAudio = new Audio();
balonAudio.src = "balloon-inflate-4-184055.mp3";
const nolabAudio = new Audio();
nolabAudio.src = "balloon-83763 (mp3cut.net).mp3";
const button = document.getElementById('myBallon');
let isAnimating = false; // Flag to track if animation is in progress

button.onmousedown = () => {
    if (isAnimating) return; // Prevent clicking if animation is in progress
    isAnimating = true; // Set flag to indicate animation is starting
    balonAudio.currentTime = 0;
    balonAudio.play();
    nolabAudio.pause();
    nolabAudio.currentTime = 0;

    const radios = document.querySelectorAll('input[name="klikacz"]'); // Get all radio buttons
    radios.forEach(radio => {
        radio.checked = false; // Unselect
    });
};

button.onmouseup = () => {
    balonAudio.pause();
    balonAudio.currentTime = 0;
    nolabAudio.play();
    nolabAudio.currentTime = 0;

    // After releasing, wait for the animation to complete before resetting
    setTimeout(() => {
        isAnimating = false;
         // Reset flag to allow another click
    }, 2000); // Delay matches the animation duration in CSS (2 seconds)

};


const myCheckBox = document.getElementById("myCheckBox");
const lekkoKliknięty = document.getElementById("lekkoKliknięty");
const średnioKliknięty = document.getElementById("średnioKliknięty");
const mocnoKliknięty = document.getElementById("mocnoKliknięty");
const mySubmit = document.getElementById("mySubmit");
const kliknąłeśMnie = document.getElementById("kliknąłeśMnie");
const jakMocno = document.getElementById("jakMocno");

mySubmit.onclick = function(){
    
    if(lekkoKliknięty.checked && myCheckBox.checked){
        kliknąłeśMnie.textContent = 'Co tak lekko dmuchasz gówniarzu!? ~~ Klikłeś mnie :3 ~~';
        jakMocno.style.display = 'none';
    }
    else if (średnioKliknięty.checked && myCheckBox.checked) {
        kliknąłeśMnie.textContent = 'Stać cię na więcej, ale nie tak tragicznie znowu ~~ Klikłeś mnie :3 ~~';
        jakMocno.style.display = 'none';
    }
    else if(mocnoKliknięty.checked && myCheckBox.checked){
        kliknąłeśMnie.textContent = 'Dobra robota! To było mocne! ~~ Klikłeś mnie :3 ~~';
        jakMocno.style.display = 'none';
    }
    else if(lekkoKliknięty.checked){
        kliknąłeśMnie.textContent = 'Co tak lekko dmuchasz gówniarzu!?';
        jakMocno.style.display = 'none';
    }
    else if (średnioKliknięty.checked) {
        kliknąłeśMnie.textContent = 'Stać cię na więcej, ale nie tak tragicznie znowu';
        jakMocno.style.display = 'none';
    }
    else if(mocnoKliknięty.checked){
        kliknąłeśMnie.textContent = 'Dobra robota! To było mocne!';
        jakMocno.style.display = 'none';
    }
    else if (myCheckBox.checked && !((lekkoKliknięty.checked || średnioKliknięty.checked)||mocnoKliknięty.checked)){
        kliknąłeśMnie.textContent = 'nie powiedziałeś jak mocno nadmuchłeś i teraz piesek jest przez ciebie smutny';
        jakMocno.style.display = 'block';
    }
    else {
        kliknąłeśMnie.textContent = 'Omae wa mou shindeiru.';
        jakMocno.style.display = 'none';
        Omaewa.play();
        setTimeout(function(){
            kliknąłeśMnie.textContent = 'Nani?!';
        }, 2700);
        setTimeout(function(){
            kliknąłeśMnie.textContent = 'Bzzzzziiinggg!!!';
            document.body.style.backgroundColor = 'white';
            document.documentElement.style.backgroundColor = 'white';
        }, 3500);
        setTimeout(function(){
            document.body.style.backgroundColor = 'red';
            document.documentElement.style.backgroundColor = 'red';
        }, 3600);
        setTimeout(function(){
            document.body.style.backgroundColor = 'blue';
            document.documentElement.style.backgroundColor = 'blue';
        }, 3700);
        setTimeout(function(){
            document.body.style.backgroundColor = 'red';
            document.documentElement.style.backgroundColor = 'red';
        }, 3800);
        setTimeout(function(){
            document.body.style.backgroundColor = 'white';
            document.documentElement.style.backgroundColor = 'white';
        }, 3900);
        setTimeout(function(){
            document.body.style.backgroundColor = 'red';
            document.documentElement.style.backgroundColor = 'red';
        }, 4000);
        setTimeout(function(){
            kliknąłeśMnie.textContent = 'Bzzzzziiinggg!!!  Uwagh!';
        }, 4300);
        setTimeout(function(){
            document.body.style.backgroundColor = 'black';
            document.documentElement.style.backgroundColor = 'black';
           }, 5500)
           
    }
}

