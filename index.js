let homescore = document.getElementById("home-score")
let guestscore = document.getElementById("guest-score")
let homecount=0
let guestcount=0

function add1home(){
    homecount+=1
    homescore.textContent = homecount
}
function add2home(){
    homecount+=2
    homescore.textContent = homecount
}
function add3home(){
    homecount+=3
    homescore.textContent = homecount
}
function add1guest(){
    guestcount+=1
    guestscore.textContent = guestcount
}
function add2guest(){
    guestcount+=2
    guestscore.textContent = guestcount
}
function add3guest(){
    guestcount+=3
    guestscore.textContent = guestcount
}