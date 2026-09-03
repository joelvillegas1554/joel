
function sumar() {
    let num1=parseInt(document.getElementById("num1").value);
     let num2=parseInt(document.getElementById("num2").value);
     let resultado=num1 + num2;
     let mostrar=document.getElementById("resultado");
     mostrar.innerHTML="Suma=" +resultado;
     alert("el resultado de la suma es :" +resultado);
}