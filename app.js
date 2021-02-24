function calc(){
    let a = parseInt(document.querySelector("#num1").value);
    let b = parseInt(document.querySelector("#num2").value);
    let op = document.querySelector("#operator").value;
    let calculate;


    if(op == 'add'){
        calculate  = a + b;
    }else if(op == 'min') {
        calculate = a - b;
    }else if(op == 'div'){
        calculate = a / b;
    }else if(op == 'mul'){
        calculate = a * b;
    }

    document.querySelector("#result").innerHTML = 'Answer = '+ calculate;
}

