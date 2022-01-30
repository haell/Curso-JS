const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');



numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p><strong>${numero}</strong> é inteiro: <strong>${Number.isInteger(numero)}</strong><br /><br /></p>`;
texto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong><br /><br /></p>`;
texto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(numero)}</strong><br /><br /></p>`;
texto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(numero)}</strong><br /><br /></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br /><br /></p>`;
