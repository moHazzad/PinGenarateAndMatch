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
    const notification = document.getElementById('noti')
    if(genPin === matchPin){
        
        notification.innerText = 'Hey i love you its match'
        console.log('match');
    }else{
        notification.innerText = 'Hey i hate you its not match'
        
    }
}

document.getElementById('submit').addEventListener('click', function(){
    matching();
})