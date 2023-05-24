keydownfunction = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const shake = document.querySelector(`img[data-key="${e.keyCode}"]`)

    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    shake.classList.add('shake')

}
function removeTransition(e){
    if(e.propetyName !== "transform") return
    console.log(e.propetyName)
}

const keys = document.querySelectorAll('.images li')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener("keydown", keydownfunction) 