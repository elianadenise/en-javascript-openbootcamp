function sumar(a, b) {
    return a + b;
}

function multilicar(a, b) {
    return a * b;
}

function elevar(a, b) {
    return a ** b;
}

function factorial(a) {
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

module.exports = {
    sumar,
    multilicar,
    elevar,
    factorial,
}