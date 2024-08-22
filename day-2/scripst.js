const nombre = prompt('¿Cuál es tu nombre?');
const edad = prompt('¿Cuántos años tienes?');
const lenguaje = prompt('¿Quélenguaje de programación estás estudiando?');  

alert (`Hola ${nombre} tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);

const tuLenguaje = prompt(`¿Te gusta estudiar ${lenguaje} Responde con el número 1 para SÍ o 2 para NO.`);

if(tuLenguaje == 1){
    alert('1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
}else{
    alert('2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');
}

/* FUNCION PARA GENERAR SALUDO */
function generarSaludo(){
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = document.getElementById("edad").value;
    const lenguaje = document.getElementById("lenguaje").value;  
    const saludo = document.getElementById("saludo").value;
 
    alert (`Hola ${nombres} ${apellidos} tienes ${edad} años y tu lenguaje de programación preferido es ${lenguaje}`);
}   
