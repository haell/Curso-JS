//Desconstrução
 //const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
 //const [primeiroNumero, segundoNumero, ...resto] = numeros;
 //const listas = [ [1, 2, 3], ['a', 'b', 'c'], ['red', 'black', 'blue'] ];
 //const [lista1, lista2, lista3] = listas; //Dá nome aos indices
 //console.log(lista3[1]);

 const pessoa = {
     nome: 'Haell',
     sobrenome: 'ell',
     idade: 39,
    endereco: {
        rua: 04,
        complemento: 'Vicente Pires'
    }
 };
//Atribuição via desestruturação.
// const { nome: Nayara = '', sobrenome, idade } = pessoa;
//console.log(Nayara, sobrenome, idade);

    //const {
    //    endereco: {rua: r = 12345, complemento},
    //    endereco
    //} = pessoa;
        //console.log(r, complemento, endereco);
    
    const {nome, sobrenome, ...resto } = pessoa;
    //const {endereco: {rua, complemento} } = pessoa;
    console.log(nome, sobrenome, resto);