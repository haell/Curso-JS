//const alunos = ['Haell', 'Nayara', 'Liz'];
//console.log(alunos[0, 1, 2]);
//unshift - adiciona elementos no começo do Array.
//push - adiciona elementos no fim do Array
//pop - remove elementos do fim do Array
//shift - remove elementos do começo do Array.

/*
function saudacao(nome) {
    return `Bom Dia! ${nome}`;    
}

const variavel = saudacao('Liz');
console.log(variavel);
*/

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

const num1 = Number(prompt('Digite um número: '));
const num2 = Number(prompt('Digite outro número: '));
const texto = document.getElementById('texto');

texto.innerHTML = ``;
texto.innerHTML += `<p>A soma dos número <strong>${num1}</strong> e <strong>${num2}</strong> é:  <strong>${soma(num1, num2)}</strong> `;

const raiz = function (n) {
    return n ** 0.5;
};

const raiz = n => n ** 0.5; // arrow function.
