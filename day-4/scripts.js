let numeroSecreto;
let numeroUsuario;
let intentos = 0;

numeroSecreto = Math.floor((Math.random()*10) + 1);
console.log(numeroSecreto);

while(intentos < 3){
    numeroUsuario = prompt('Adivina el número secreto');

    if(numeroUsuario == numeroSecreto){
        alert(`Felicitaciones!! acertaste el número secreto era ${numeroSecreto}`);
    }else{
        alert(`${numeroUsuario} no es el número secreto, intenta de nuevo`);
    }
    intentos++;
}

if(numeroUsuario != numeroSecreto){
    alert('Perdiste, no acertaste en los 3 intentos');
}