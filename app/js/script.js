const dice = document.querySelector('.dice');
const adviceID = document.querySelector('.adviceID');
const advice = document.querySelector('.advice');
const loadingCircle = document.querySelector('.loadingCircle');


const hide = document.querySelector('.advice');
const show = document.querySelector('.advice');



fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
        //Onload show loading sign
        setInterval(() => {
            loadingCircle.classList.add('hide')
        }, 1000);
        //After 1000ms show advice
        setTimeout(() => {
            adviceID.innerHTML = `#${data["slip"].id}`;
            advice.innerHTML = `"${data["slip"].advice}"`;
        }, 1000);
        //After showing advice increase the size of dice once
        setTimeout(() => {
            dice.classList.add('diceAnim')            
        }, 1200);
    })




//Onclicking dice show another advice
dice.addEventListener('click', () => {
    advice.style.display = "none";
    loadingCircle.classList.replace('hide', 'show')
    setTimeout(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => {
                loadingCircle.classList.replace('show', 'hide')
                adviceID.innerHTML = `#${data["slip"].id}`;
                advice.style.display = "block";
                advice.innerHTML = `"${data["slip"].advice}"`;
            })
    }, 1000);

})