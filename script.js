let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
var screenValue = ''
buttons.forEach(element => {
    element.addEventListener('click', (e)=>{
        buttonText= e.target.innerText;
        console.log(buttonText);

        if(buttonText=='x'){
            buttonText='*';
            screenValue += buttonText
            screen.value = screenValue;
            
        }
        else if (buttonText=='C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText == 'B'){
            screenValue = screenValue.substr(0, screenValue.length-1);
            screen.value = screenValue;
        }

        else if( buttonText == '='){
            screen.value = eval(screenValue);
        }

        
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
    
});
