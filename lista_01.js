//1 - soma
function somaElementos(array){
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

//2 - média
function mediaElementos(lista){
    let soma = somaElementos(lista);
    return soma / lista.length;
}

//3 - menor elemento
function menorElemento(array){
    let menor = array[0];
    for (i = 1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return menor;
}

//4 - medalha de prata
function medalhaDePrata(array){
    let maior = array[0];
    let segundoMaior = -1;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            segundoMaior = maior;
            maior = array[i];
        } else if (array[i] > segundoMaior && array[i] < maior) {
            segundoMaior = array[i];
        }
    }
    return segundoMaior;
}

//5 - filtro
function filtro(array){
    let impares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            impares.push(array[i]);
        }
    }
    return impares;
}

//6 - inverso
function inverso(array){
    let inverso = [];
    for (let i = array.length - 1; i >= 0; i--) {
        inverso.push(array[i]);
    }
    return inverso;
}

//7 -  histograma
function histograma(array) {
    let histograma = [];
    for (let i = 0; i < 5; i++) {
        histograma[i] = '';
    }
    
    for (let i = 0; i < array.length; i++) {
        let valor = array[i];
        if (valor >= 1 && valor <= 100) {
            let indice = Math.floor((valor - 1) / 20);
            histograma[indice] += '*';
        }
    }
    
    for (let i = 0; i < histograma.length; i++) {
        console.log(`${(i * 20 + 1)}-${(i + 1) * 20}: ${histograma[i]}`);
    }
}

//8 - verificador
function verificador(array) {
    let nome = prompt("Digite o nome do aluno que você quer verificar");

    for (let i = 0; i < array.length; i++) {
        if (array[i] == nome) {
            return "Está presente";
        }
    }

    return "Não está presente";
}

//9 - comparador
function comparador(arrayUm, arrayDois) {
    for (let i = 0; i < arrayUm.length; i++) {
        if (arrayUm[i] !== arrayDois[i]) {
            return false;
        }
    }
    return true;
}

//10 - removedor
function removedor(array, indice) {
    let arrayModificado = [];

    for (let i = 0; i < array.length; i++) {
        if (i !== indice) {
            arrayModificado.push(array[i]);
        }
    }
    return arrayModificado;
}

//11 - Palindromo
function isPalindromo(string) {
    let novaString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        let char = string[i]
        novaString = novaString + char
    }

    if (novaString === string) {
        return true
    }
    return false
}

//12 - intercalador
function intercalador(arrayUm, arrayDois) {
    let intercalado = [];
    for (let i = 0; i < arrayUm.length; i++) {
        intercalado.push(arrayUm[i]);
        intercalado.push(arrayDois[i]);
    }
    return intercalado;
}

//13 - compactador
function compactador(array) {
    let compactado = [];
    for (let i = 0; i < array.length; i++) {
        if (i === 0 || array[i] !== array[i - 1]) {
            compactado.push(array[i]);
        }
    }