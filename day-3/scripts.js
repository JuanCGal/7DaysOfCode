const eleccionPrincipal = prompt('Si quieres seguir hacia el área de Front-End escribe 1, si quieres el áre de Back-End escribe 2');
let eleccion = '';

if(eleccionPrincipal == 1){
    eleccionSecundariaFront = prompt('Si quieres aprender React escribe 1 o si quieres apender Vue escribe 2');
        if(eleccionSecundariaFront == 1){
            eleccion = ' Front-End';
            let react = 'React';
            alert(`Felicitaciones por elegir ${react}`);
        }else{
            //Si dentro de Front-End elige Vue
            let vue = 'Vue';
            alert(`Felicitaciones por elegir ${vue}`);
        }
} else{
    //Si elige Back-End
    eleccionSecundariaBack = prompt('Si quieres aprender C# escribe 1 o si quieres apender Java escribe 2');
    eleccion = ' Back-End';
    if(eleccionSecundariaBack == 1){
        let cChart = 'C#';
        alert(`Felicitaciones por elegir ${cChart}`);
    }else{
        //Si dentro de Front-End elige Vue
        let vue = 'Vue';
        alert(`Felicitaciones por elegir ${vue}`);
    }
}

const especializacion = prompt(`Si quieres seguir especializandote en ${eleccion} 1 o si en Fullstack escribe 2`);

if(especializacion == 1){
    alert('Felicitaciones por elegir' + eleccion);
}else{
    alert(`Felicitaciones por elegir Fullstack`);
}

const tecnologias = [];
let tecnoElegida;
while(tecnoElegida !== "s"){
    tecnoElegida = prompt(`Escribe que otra tecnología que te gustaría aprender? sino escribe s para salir`);
    if(tecnoElegida !== "s"){
        alert(`${tecnoElegida} es una tecnología genial`);
        tecnologias.push(tecnoElegida);
    }else{
        break;
    }
    
}    


