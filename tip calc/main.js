let inp1 = document.getElementById('billinp');
let inp2 = document.getElementById('tipinp');
let div1 = document.getElementById('numpep');
let div2 = document.getElementById('result');

let numberofpeople = Number(div1.innerText);

let calcbill = () => {
    let bill = Number(inp1.value);
    let tipper = Number(inp2.value)/100;
    let tipam = bill * tipper;
    let total=tipam+bill;
    let perperson = total/numberofpeople;
    div2.innerText =`$${perperson.toFixed(2)}`;

}

let increment = () => {
    numberofpeople++;
    div1.innerText=numberofpeople;
    calcbill();

}
let discrement = () => {
    if(numberofpeople<=1){
        alert("hey you can't have less than 1 person "  );
        return;
    }
    numberofpeople--;
    div1.innerText = numberofpeople;
    calcbill();

    

}
function moveToNextInput(event, nextInputId) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior (e.g., submitting a form)
        document.getElementById(nextInputId).focus();
    }
}
