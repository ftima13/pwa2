// lib.js
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));  // Obtiene el valor de n de la URL
const d = parseInt(params.get('d'));  // Obtiene el valor de d de la URL

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    // Crear una cadena de 1's para las partes visibles y 0.001's para las partes invisibles
    crearCadunos() {
        let cadunos = "";
        // Las partes visibles
        for (let i = 0; i < this.n; i++) {
            cadunos += "1,";  // "1" representa una parte visible
        }
        // Las partes invisibles
        for (let i = 0; i < this.d - this.n; i++) {
            cadunos += "0.001,";  // "0.001" representa una parte invisible
        }
        return cadunos.slice(0, -1);  // Elimina la última coma extra
    }

    // Generar la URL del gráfico
    generarSrcImg() {
        let data = this.crearCadunos();  // Obtener los datos del gráfico
        let labels = `${this.n}/${this.d}` + ",".repeat(this.d - 1);  // Etiquetas con la fracción n/d
        labels = labels.slice(0, -1);  // Eliminar la última coma extra
        let url = `https://quickchart.io/chart?cht=p3&chd=t:${data}&chs=500x250&chl=${labels}`;
        return url;
    }
}

// Crear el gráfico con los valores n y d proporcionados en la URL
let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';




