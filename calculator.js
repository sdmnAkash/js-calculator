
let prevDisplay = document.getElementById("prev-display");
let currentDisplay = document.getElementById("current-display");

let overwrite = false;

function addToDisplay(input){

    if(overwrite && input){
        currentDisplay.value = input;
        overwrite = false;
    }
    else{
        if(input==0 && currentDisplay.value == ""){
            currentDisplay.value = "";
        }
        else if(input == "." && currentDisplay.value.includes(".")){
            currentDisplay.value = currentDisplay.value;
        }
        else{
            currentDisplay.value += input;
        }
    }

}

function addOperand(input){
    prevDisplay.value = currentDisplay.value+input;
    currentDisplay.value = "";
}

function allClear(){
    currentDisplay.value = "";
    prevDisplay.value = "";
}

function calculate(){
    try{
        currentDisplay.value = eval(prevDisplay.value + currentDisplay.value);
        prevDisplay.value = "";
        overwrite = true;
    }
    catch(error){
        currentDisplay.value = "Error";
        overwrite = true;
    }
}
    

