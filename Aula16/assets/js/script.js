/*
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'red';
const corPadrao = corUsuario || 'Preta';

const data = new Date('2022-02-15 20:20:50.200'); // Ano, Mes, Dia, Hora, Minuto, Segundo, ms
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() +1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minuto', data.getMinutes());
console.log('Segundo', data.getSeconds());
console.log('Milésimo de segundo', data.getMilliseconds());
console.log('Dia semana', data.getDay());
console.log(data.toString());

console.log(Date.now());
 */
function zeroAesquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    // console.log(data);
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth()+1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const minuto = zeroAesquerda(data.getMinutes());
    const segundo = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);