// lib.js
// http://localhost/pwasd25/index.html?n=2&d=5
const params = new URLSearchParams(window.location.search);
const n = params.get('n');
const d = params.get('d');

class Quickchart {
    constructor(d) {
        this.d = d;
    }

    // Crear una cadena de 1's para dividir el pastel en partes iguales
    crearCadunos() {
        let cadunos = "";
        // Cambiar el bucle para que vaya de 0 a d
        for (var i = 0; i < this.d; i++) {
            cadunos += "1,";  // Cada "1" representa una parte del pastel
        }
        cadunos = cadunos.slice(0, -1);  // Eliminar la última coma extra
        return cadunos;
    }

    // Generar la URL del gráfico
    generarSrcImg() {
        let url = "https://quickchart.io/chart?cht=p3&chd=t:" + this.crearCadunos() 
                 + "&chs=500x250&chl=" + "1/" + this.d;  // Mostrar "1/d" como etiqueta
        return url;
    }
}

// Crear el gráfico con el valor de d proporcionado en la URL
let q = new Quickchart(d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';

// '<img src="https://quickchart.io/chart?cht=p3&chd=t:1,1,1,1&chs=500x250&chl=1/4">';
// q.generarSrcImg();

// "<h1>Adios</h1>";


