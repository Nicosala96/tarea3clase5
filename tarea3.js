//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


let boton = document.querySelector("#boton");



boton.onclick = function(){
let videos = document.querySelector("#videos").value;

 for(i=0; i < videos ;i++){
    let formNodo = document.querySelector("#form");
    let divs = document.createElement("div")
    let labelNodo = document.createElement("label");
    let inputHoras = document.createElement("input");
    let inputMinutos = document.createElement("input");
    let inputSegundos = document.createElement("input");
    labelNodo.innerText = "Video " + (i+1) ;
    formNodo.appendChild(divs);
    divs.appendChild(labelNodo);
    labelNodo.appendChild(inputHoras);
    labelNodo.appendChild(inputMinutos);
    labelNodo.appendChild(inputSegundos);

    inputHoras.type="number"
    inputHoras.placeholder="Horas"
    inputHoras.id="horasClases"

    inputMinutos.type="number"
    inputMinutos.placeholder="Minutos"
    inputMinutos.id="minutosClases"
   
    inputSegundos.type="number"
    inputSegundos.placeholder="Segundos"
    inputSegundos.id="segundosClases"

    
 }
 document.querySelector("#boton").disabled = true
}

let botonCalcular = document.querySelector("#calcular")


    
    let horasTotales = 0
    let minutosTotales = 0
    let segundosTotales = 0

botonCalcular.onclick = function(){
    inputsIndividuales = 3

    let cantidadInputs = document.querySelectorAll("input").length
    cantidadInputs = cantidadInputs/inputsIndividuales

    for(let y=1; y <= cantidadInputs; y++){
    horasTotales = Number(document.getElementById("horasClases").value)+ horasTotales
    }
    for(let y=1; y <= cantidadInputs; y++){
    minutosTotales = Number(document.getElementById("minutosClases").value) + minutosTotales
    if(minutosTotales >= 60){
        minutosTotales = minutosTotales % 60
            horasTotales = horasTotales + 1
    }
    }
    for(let y=1; y <= cantidadInputs; y++){
    segundosTotales = Number(document.getElementById("segundosClases").value) + segundosTotales
    if(segundosTotales >= 60){
         segundosTotales = segundosTotales % 60
        minutosTotales = minutosTotales + 1
    }
    document.querySelector("#calcular").disabled = true
    }


  let strong = document.querySelector("#strong")
  strong.textContent = "El tiempo total es " + horasTotales + " horas con " + minutosTotales + " minutos y " + segundosTotales + " segundos."
}
    



