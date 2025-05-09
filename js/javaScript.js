var puntos, preguntas, nombre, puntosObt, adivinanza, res, menu, opciones;

// function correcto(resUsuario,resCorrecta){
//     let resultado=(resUsuario===resCorrecta)?"Felicidades muy bien":"Lo lamento"
//     alert(resultado)
// }

// Inicio del Simulador 

alert("Hola y bienvenido");
alert("En este juego vamos a realizar una serie de preguntas");

nombre= prompt("Primero que nada ¿Cómo te llamas?");

alert ("Hola " + nombre + " te damos la bienvenida");
alert("Comencemos con esta pregunta sin sentido");

preguntas = confirm("Thanos tenia razon?");

if (preguntas==true){
    alert ("Felicidades anda al psicologo");
}
else {
    alert("Si sabes que tenia razon por que pones que no ?")
}

alert ("Bien ahora vamos con la siguiente parte. Ahora vamos por una adivinanza facil");

while(true){
    menu= "Soy ligero como una pluma pero incluso el hombre más fuerte no puede sostenerme durante mucho tiempo. ¿Qué soy?\n";
    menu+= "Seleccione la opcion correcta\n";
    menu+= 1+" El pensamiento\n";
    menu+= 2+" La respiracion\n";
    menu+= 3+" El mundo";
    let respuesta= parseInt(prompt(menu));
    if (respuesta==2){
        alert("Muy bien respuesta correcta, podes avanzar")
        break
    }
    else{
        alert("Lo lamento vuelve a intentarlo")
    }
}

