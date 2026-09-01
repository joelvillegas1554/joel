alert("si funciona")
let valorA=parseInt(prompt("introduzca un numero"));
let valorB=parseInt(prompt("introduzca un numero"));
let valorC=parseInt(prompt("introduzca un numero"));
let D=valorA+valorB+valorC
alert(D)
let res=D/3
alert(res);
//
function multiplicacion(a,b) {
 let c=0;
for(let i=0;i<b;i++) {
        c=c+a;
}
return c;
}
let a=parseInt(prompt("introduzca un numero"));
let b=parseInt(prompt("introduzca un numero"));
alert (multiplicacion(a,b));
function divicion(A,B) {
    let C=0;
    while (A>=B) {
        A=A-B;
        C++;
    }
return C;
    
}









