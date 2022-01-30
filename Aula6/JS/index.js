let varA = 'A';
let varB = 'B';
let varC = 'C';

//Resultado deve ser: B C A

/*const TempVarA = varA;
varA = varB;
varB = varC;
varC = TempVarA;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);