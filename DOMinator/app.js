const inputs = document.querySelector("input");

function create_Ele(){
    console.log(inputs);
    let ele = document.createElement(inputs[0].value);
    console.log(ele);
    /*for(i=0; i< inputs.length-1; i++){
      
    }*/
    
}
function reset(){
    for(i = 0; i < inputs.length-1; i++){
        inputs[i].innerHTML = "";
    }
}