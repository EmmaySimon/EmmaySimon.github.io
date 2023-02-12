
document.getElementById("boton").onclick = function () {
    console.log("capturamos el evento click");
    document.getElementById("demo").innerHTML = "LLamame al +54 2664000123 Para Coordinar Una Entrevista, Muchas Gracias!";
}

const collection = document.getElementsByClassName("nombre");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.backgroundColor = "blue";
}