
class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    crearCadunos() {
        let cadunos = "";
        // Parte visible (n partes)
        for (let i = 0; i < this.n; i++) {
            cadunos += "1,";  // Parte visible
        }
        // Parte invisible (d - n partes)
        for (let i = 0; i < this.d - this.n; i++) {
            cadunos += "0.001,";  // Parte invisible pero existente
        }
        return cadunos.slice(0, -1);  // Elimina la última coma extra
    }

    generarSrcImg() {
        const data = this.crearCadunos();

        // Creamos etiquetas: solo la parte marcada (n/d), el resto vacío
        let labels = `${this.n}/${this.d}` + ",".repeat(this.d - 1);
        labels = labels.slice(0, -1);  // Elimina la última coma extra

        // Generamos la URL con los datos y etiquetas
        const url = `https://quickchart.io/chart?cht=p3&chd=t:${data}&chs=500x250&chl=${labels}`;
        return url;
    }
}

const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d'));

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';






