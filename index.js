console.log(' ')
let hour = prompt('Escribe que hora es: ');
if (hour < 12 && hour >= 6) {
    console.log("Buen día");
} else if (hour <= 18 && hour >= 12) {
    console.log("Buenas tardes");
} else if (hour <= 23 && hour >= 19 || hour >= 0 && hour <= 6) {
    console.log("Buenas noches");
} else {
    console.log("Error: La hora debe ser de 0hs hasta 24hs")
}

console.log(' ')
console.log('Ciclo WHILE progresivo -> ->')
let numeroMaximo = prompt('Ingrese hasta que numero quiere contar: ');
let contador = 1;
while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}

console.log(' ')
console.log('Mitad del anterior numero con Ciclo FOR en reversa <- <-')
for (let i = numeroMaximo/2; i > 0; i--) {
    console.log(i);
}


console.log(' ')
alert('Ingrese 2 numeros para un calculo matematico: ')


/* CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA / CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA /  */

function calculadora(numero1, operacion, numero2){
    switch (operacion) {
        case '+':
            return numero1 + numero2
            break;
        case '-':
            return numero1 - numero2
            break;
        case '/':
            if (numero2 === 0) {
                return 'no se puede dividir por cero'
            }
            return numero1 / numero2
            break;
        case '*':
            return numero1 * numero2
            break;
        default:
            return 'Debe definir una operación correcta'
            break;
    }
}

let resultado = calculadora(Number(prompt('ingrese numero 1')), prompt('ingrese la operacion'), Number(prompt('ingrese numero 2')));
console.log('El resultado es: ' + resultado)

/* CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA / CALCULADORA - CALCULADORA + CALCULADORA * CALCULADORA /  */