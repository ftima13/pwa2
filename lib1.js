// lib.js
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));  // Obtiene el valor de n (partes visibles)
const d = parseInt(params.get('d'));  // Obtiene el valor de d (total de partes)

// Clase para generar el gráfico
class Quickchart {
    constructor(n, d) {
        this.n = n;  // Partes visibles
        this.d = d;  // Total de partes
    }

    // Crear una cadena para las partes visibles (1) y partes invisibles (0.001)
    crearCadunos() {
        let cadunos = "";
        // Añadir "1" para las partes visibles
        for (let i = 0; i < this.n; i++) {
            cadunos += "1,";  // Cada "1" representa una parte visible
        }
        // Añadir "0.001" para las partes invisibles
        for (let i = 0; i < this.d - this.n; i++) {
            cadunos += "0.001,";  // Cada "0.001" representa una parte invisible
        }
        // Eliminar la última coma extra
        return cadunos.slice(0, -1);
    }

    // Generar la URL del gráfico
    generarSrcImg() {
        const data = this.crearCadunos();  // Datos de las partes del gráfico
        const labels = `${this.n}/${this.d}` + ",".repeat(this.d - 1);  // Etiquetas como "n/d"
        const finalLabels = labels.slice(0, -1);  // Eliminar la última coma extra

        // Generar la URL para el gráfico de Quickchart
        const url = `https://quickchart.io/chart?cht=p3&chd=t:${data}&chs=500x250&chl=${finalLabels}`;
        return url;
    }
}

// Crear el gráfico con los valores n y d proporcionados en la URL
let q = new Quickchart(n, d);

// Insertar el gráfico en el HTML
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';
