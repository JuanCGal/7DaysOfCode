// let nombre = prompt('¿Cuál es tu nombre?');
// let edad = prompt('¿Cuántos años tienes?');
// let lenguaje = prompt('¿Quélenguaje de programación estás estudiando?');  

// alert (`Hola ${nombre} tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);

// const tuLenguaje = prompt(`¿Te gusta estudiar ${lenguaje} Responde con el número 1 para SÍ o 2 para NO.`);

// if(tuLenguaje == 1){
//     alert('1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
// }else{
//     alert('2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
// }

/* FUNCION PARA GENERAR SALUDO */
function generarSaludo(){
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let lenguaje = document.getElementById("lenguaje").value;  
    let saludo = document.getElementById("textArea");
    let saludoCompleto = `Hola ${nombres} ${apellidos} tienes ${edad} años y tu lenguaje de programación preferido es ${lenguaje}`;
    saludo.value = saludoCompleto;
    // nombres.value = "";
    // alert (saludoCompleto);
    limpiarInputs();
}  

function limpiarInputs(){
    nombres.value = "";
    apellidos.value = "";
    edad.value = "";
    lenguaje.value = "";
}
