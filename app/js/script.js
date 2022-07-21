const dice = document.querySelector('.diceColumn');
const adviceID = document.querySelector('.adviceID')
const advice = document.querySelector('.advice')


dice.addEventListener('click' , ()=>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
    adviceID.innerHTML = `#${data["slip"].id}`;
    advice.innerHTML = `"${data["slip"].advice}"`;        
    })
})