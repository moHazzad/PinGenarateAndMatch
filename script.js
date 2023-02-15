document.getElementById('generate_btn').addEventListener('click', function () {
    const pinDisplay = document.getElementById('pinDisplay')
    pinDisplay.value = pin()
})
function pin(){
    const randomNumber  = getPin()
    const stringPin = randomNumber + ''
    if(stringPin.length === 3){
        return randomNumber
    } else{
        return pin()
    }
}

function getPin(){
    const randomNumber  = Math.floor(Math.random()* 1000)
    return randomNumber
}