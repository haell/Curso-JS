/*
const h1 = document.querySelector('.container h1');
const data = new Date();

function getDayWeekText(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }

}

console.log(data);
h1.innerHTML = getDayWeekText(data.getDay());
*/


const h1 = document.querySelector('.container h1');
//const data = new Date();
//h1.innerHTML = new Date().toLocaleDateString('pt-BR', {dateStyle: 'full'}); // não aceita timeStyle: 'short'.
h1.innerHTML = new Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date())