let values = [];
document.addEventListener('click', function(event){
        if (event.target.classList.contains('additon')){
            additon();
            operate();
        } else if (event.target.classList.contains('subtraction')){
            subtraction();
        } else if (event.target.classList.contains('multiply')){
        }
    });
function storeValue(number){
    values.push(number);
    console.log(values);
}
function display(a){
}
function operate(){
    console.log(result);
}

function additon(){
    let result = 0;
    //console.log(values);
    for (let i = 0; i < values.length; i++){
        result += values[i];
    }
    //return result;
}
function subtraction(a,b){
    return a - b;
}
function divide (a,b){
    return a / b;
}
function multiply(){
    let result = 0;
    let f = values[0];
    console.log(f);
    //return a * b;
}
function modulus(a,b){
    return a % b;
}
