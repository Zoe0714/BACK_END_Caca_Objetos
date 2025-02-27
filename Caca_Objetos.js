const Escondidos = document.getElementById('Escondidos');
const Marcar = document.getElementById('Marcar');

function isCavalinhoTroca(){
    return lamp.src.indexOf('marcada')> -1;}

function MarcarObjeto(){
    if(!isCavalinhoTroca()){
        Escondidos.src= 'Check.png';}}

Marcar.addEventListener('click',MarcarObjeto);
