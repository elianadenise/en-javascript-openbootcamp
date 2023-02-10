export function sumar(a, b) {
    return a + b;
}

export function multilicar(a, b) {
    return a * b;
}

export function elevar(a, b) {
    return a ** b;
}

export function factorial(a) {
    let factorial = 1;
    for(let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

export const matematicaConst = "Hola, podes exportar const"