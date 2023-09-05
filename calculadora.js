console.log("script conectado exitosamente")

const txtOp1 = document.getElementById("op1") 
const txtOperacion = document.getElementById("operacion") 
const txtOp3 = document.getElementById("op3") 
const txtbotonCalcular = document.getElementById("botonCalcular") 
const pResultado = document.getElementById("Resultado")


botonCalcular.addEventListener('click', calcular)

function calcular() {
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op3 = parseFloat(txtOp3.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1)  && !isNaN(op3)) {
     let Resultado;
    switch(operacion) {
        case "+":
         Resultado = op1 + op3
         break;

         case "-":
         Resultado = op1 - op3
         break;

         case "*":
         Resultado = op1 * op3
         break;

         case "/":
         Resultado = op1 / op3
         break;
    }

        pResultado.style ="color:black"
        pResultado.innerText = "= " + Resultado
    }
    else {
        pResultado.style ="color:red"
        pResultado.innerText = "calculo imposible"
        
    }
    
}