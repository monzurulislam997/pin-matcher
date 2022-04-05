function getPin(){
    const pin =Math.round((Math.random()*10000));
    const pinString =pin+''
    
    if(pinString.length==4){
       return pin
    } else {
        getPin()
    }
    return pin
}

function generatePin(){
  
    const input=document.getElementById("display-pin")
       input.value=getPin()
    
}
//calculator
document.getElementById("key-pad").addEventListener('click',function(event){
    const number =event.target.innerText;
    const calc = document.getElementById('typed-number')
    if(isNaN(number)){
        if(number=="C"){
            calc.value=" "
        }
    }
   else{
    
    const previousCalc =calc.value;
    const newCalc =previousCalc+number;
    calc.value =newCalc;
   }
    
})

//submit button
function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    console.log(pin)
    const typedNumbers =document.getElementById('typed-number').value;

        const successMessage = document.getElementById('match');
        const errorMessage = document.getElementById('no-match');

    if(pin==typedNumbers){
       successMessage.style.display="block"
       errorMessage.style.display="none"
    } else {
        errorMessage.style.display="block"
        successMessage.style.display="none"
    }

}