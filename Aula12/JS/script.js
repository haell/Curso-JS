// argumento é o valor passado para o parametro na função.
/*
const pessoa1 = {
    nome: 'Israel',
    sobrenome: 'Araújo',
    idade: 39,

    fala(){
        console.log(`$`{this.nome}`);
    }
};
*/

function criaPessoa (nome, sobrenome, idade) {   //essa função se chama factore.
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
    };
}

const pessoa1 = criaPessoa('Liz', 'Araújo', 1);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
