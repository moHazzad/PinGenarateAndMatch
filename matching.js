document.getElementById('buttons').addEventListener('click', function(e){

    const buttons = e.target.innerText
    const matchDisplay = document.getElementById('matchingDisplay')
    const priNumber = matchDisplay.value

    if(isNaN(buttons)){
        if(buttons === 'C'){
            matchDisplay.value = ''
        } else if(buttons === '<'){
            console.log('ok');
        }
    } else{
        
        const newNumber = priNumber + buttons 
        matchDisplay.value = newNumber
    }
})
function matching(){
    const marchingPin = document.getElementById('matchingDisplay')
    const matchPin = marchingPin.value
    const genartePin = document.getElementById('pinDisplay')
    const genPin = genartePin.value
    if(genPin === matchPin){
        console.log('match');
    }else{
        console.log('invalid');
    }
}

document.getElementById('submit').addEventListener('click', function(){
    matching();
})