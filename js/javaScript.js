var preguntas, nombre, menu, opciones, respuesta, confirmar;

// // Funcion

function vuelto(cantObj,valor){
    cant=cantObj*valor;
    descuento=confirm("Tenes descuento?")
    if (descuento==true){
        descuento=0.80;
        total=cant-descuento;
        alert("Tu gasto es de "+ total+" pesos. Gracias por su compra")
    }
    else{
        alert("Tu gasto es de "+ cant+" pesos. Gracias por su compra") 
    }
}

// // Inicio del Simulador 

alert("Hola y bienvenido");

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

alert("Perfecto vamos con la siguiente etapa");

let lista=["Manzana"," Pera"," Anana"," Frutilla"," Banana "];
let pedido=prompt("Elige uno de estos productos "+lista);
cant=parseInt(prompt("Cuantas " + pedido + " queres?"))
switch (pedido){
    case "manzana":
        valor=1
        vuelto(cant, valor);
    break
    case "pera":
        valor=3
        vuelto(cant, valor);
    break
    case "anana":
        valor=5
        vuelto(cant, valor);
    break
    case "frutilla":
        valor=2
        vuelto(cant, valor);
    break
    case "banana":
        valor=3
        vuelto(cant, valor);
    break
    default:
        alert("Ingresaste un producto que no tenemos")
        confirmar=confirm("Quieres agregar un producto?")
        if (confirmar==true){
            lista.push(prompt("Que producto quieres ingresar?"))
            valor= parseInt(prompt("Cuanto vale el producto?"))
            cant=parseInt(prompt("Cuantas " + pedido + " queres?"))
            vuelto(cant, valor);
            alert("Tienes en tu lista "+ lista + " un total de " + lista.length + " items")
        }
        else{
            alert("Gracias por su compra")
        }
}

