let hr = 0, min = 0, sec = 0
const hr_hand = document.getElementById("hr")
const min_hand = document.getElementById("min")
const sec_hand = document.getElementById("sec")
const text = document.getElementById("text")

setInterval(time,1000)
function time()
{
    let t = new Date();
    hr = t.getHours();
    min = t.getMinutes();
    sec = t.getSeconds();

    sec_hand.style.transform = `rotate(${sec*6}deg)`
    min_hand.style.transform = `rotate(${min*6}deg)`
    hr_hand.style.transform = `rotate(${hr*30+6*(Math.floor(min/12))}deg)`
    text.innerText = Date()
}