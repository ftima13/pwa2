const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d'));

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    crearCadunos() {
        let cadunos = "";
        for (let i = 0; i < this.n; i++) {
            cadunos += "1,";  // part visible (marcada)
        }
        for (let i = 0; i < this.d - this.n; i++) {
            cadunos += "0.001,";  // part invisible but existing
        }
        return cadunos.slice(0, -1);
    }

    generarSrcImg() {
        const data = this.crearCadunos();

        // Creamos etiquetas: solo la parte marcada (n/d), el resto vacío
        const labels = ` ${this.n}/${this.d}` + ",".repeat(this.d - 1);

        const url = `https://quickchart.io/chart?cht=p3&chd=t:${data}&chs=500x250&chl=${labels}`;
        return url;
    }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';

