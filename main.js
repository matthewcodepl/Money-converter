let input = document.getElementById('lbsInput');
let output = document.querySelector('.output');


input.addEventListener('input', e => {
    let pln = e.target.value;
    pln === '' ?  output.style.visibility = "hidden" : output.style.visibility = "visible"; 

    document.getElementById("euroOutput").innerHTML = `${pln*4.2465} Euro` ;
    document.getElementById("dolarOutput").innerHTML = `${pln*0.27} Dolars `;
    document.getElementById("funtOutput").innerHTML = `${pln*4.7295} Pound `;


})


