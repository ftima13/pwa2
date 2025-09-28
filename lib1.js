// Obtener parámetros de URL
const params = new URLSearchParams(window.location.search);
const n = parseInt(params.get('n'));
const d = parseInt(params.get('d')); 

class Quickchart {
    constructor(n, d) {
        this.n = n;
        this.d = d;
    }

    // Crear datos para Quickchart
    crearCadunos() {
        let cad = Array(this.n).fill(1); 
        cad = cad.concat(Array(this.d - this.n).fill(0)); 
        return cad.join(',');
    }

    generarSrcImg() {
        // Usamos "chco" para dar color a las porciones: rojo para resaltadas, gris para las demás
        let colors = Array(this.n).fill("ff0000").concat(Array(this.d - this.n).fill("cccccc")).join('|');

        let url = "https://quickchart.io/chart?cht=p&chd=t:" + this.crearCadunos() +
                  "&chs=500x250&chl=" + this.n + "/" + this.d +
                  "&chco=" + colors;
        return url;
    }
}

let q = new Quickchart(n, d);
document.getElementById("contenido").innerHTML = '<img src="' + q.generarSrcImg() + '" />';


