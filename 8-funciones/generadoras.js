// FUNCIONES G E N E R A D O R A S
function* generarId() {
    let id = 0;
    while(true){
        id++;
        yield id; // espera a que se vuelva a llamar
        if(id >= 10){
            return;
        }
    }
}

const generadora = generarId();
console.log(generadora.next()); //{value: 1, done: false}
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next());
console.log(generadora.next().value); // 10
console.log(generadora.next()); //{value: undefined, done: true}

