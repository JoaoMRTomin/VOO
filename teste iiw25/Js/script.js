// CLASSE MÃE
class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = 0;
        this.status = "No Pátio";
    }

    decolar() {
        this.altitude = 10000;
        this.status = "Em Voo";
        alert(`${this.codigo}: Decolagem autorizada!`);
        this.atualizarInterface();
    }
}

// SUBCLASSE 1: JATO EXECUTIVO
class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        // super chama o constructor da classe Voo
        super(codigo, origem, destino); 
        this.modoSupersonico = false;
    }

    ativarSupersonico() {
        if (this.altitude > 0) {
            this.modoSupersonico = true;
            this.altitude = 25000; // Jatos supersônicos voam mais alto
            this.atualizarInterface();
            alert("Modo Supersônico Ativado! Quebrando a barreira do som.");
        } else {
            alert("Erro: O jato precisa estar em voo para ativar o modo supersônico!");
        }
    }

    desativarSupersonico() {
        this.modoSupersonico = false;
        this.altitude = 10000;
        this.atualizarInterface();
    }

    atualizarInterface() {
        document.getElementById('jato-status').innerText = this.status;
        document.getElementById('jato-altitude').innerText = this.altitude;
        document.getElementById('jato-super').innerText = this.modoSupersonico ? "ATIVADO 🚀" : "Desativado";
    }
}

// SUBCLASSE 2: VOO DE CARGA
class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(peso) {
        if (this.cargaAtual + peso <= this.capacidadeMaxima) {
            this.cargaAtual += peso;
            this.atualizarInterface();
        } else {
            alert("Erro: Capacidade máxima excedida! O avião ficaria pesado demais para decolar.");
        }
    }

    atualizarInterface() {
        document.getElementById('carga-atual').innerText = this.cargaAtual;
        document.getElementById('carga-max').innerText = this.capacidadeMaxima;
        document.getElementById('carga-altitude').innerText = this.altitude;
    }
}

// --- INSTANCIAÇÃO ---

const meuJato = new JatoExecutivo("LUX-001", "São Paulo", "Paris");
const meuCargueiro = new VooCarga("CARGO-77", "Manaus", "Miami", 5000); // 5000kg de limite

// Inicializar telas
meuJato.atualizarInterface();
meuCargueiro.atualizarInterface();

// Função auxiliar para o botão de carga
function carregarAviao() {
    const peso = Number(document.getElementById('input-peso').value);
    meuCargueiro.embarcarCarga(peso);
}