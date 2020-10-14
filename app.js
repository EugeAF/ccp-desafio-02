let texto = prompt('Ingrese un texto, con un máximo de 70 caracteres');

while (texto.length > 70) {
    texto = prompt('No se pudo procesar. Por favor ingrese un texto que no supere los 70 caracteres.');
}

console.log('Largo total (contando espacios en blanco): ' + texto.length);
console.log('Largo total (sin contar espacio en blanco): ' + contarLargoSinEspacios(texto));
console.log('Cantidad total de palabras: ' + contarPalabras(texto)) 
console.log('Se repiten palabras: ' + (hayPalabrasReperidas(texto)? 'Si':'No'))


function contarLargoSinEspacios(texto){
    if(texto === undefined) {
        console.log("No se ingreso un texto")
        return;
    }
    let contador = 0;
    for(let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contador++;
        }
    }
    return contador
}

function contarPalabras(texto){
    if(texto === undefined) {
        console.log("No se ingreso un texto")
        return;
    }
    return texto.split(' ').length
}

function hayPalabrasReperidas(texto) {
    let textoComoArreglo = texto.split(' ')
    for(let i = 0; i < textoComoArreglo.length; i++){
        let palabraActual = textoComoArreglo[i]
        for(let j = 0; j < textoComoArreglo.length; j++) {
            let palabraActualInterna = textoComoArreglo[j]
            if(palabraActual == palabraActualInterna && i != j ){
                return true
            }
        }
    }
    return false
}

