// 1. Definição da Classe
class Voo {
    constructor(codigo, origem, destino, horario) {
        // Atributos recebidos no nascimento do objeto
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.horario = horario;

        // Atributos iniciais padrão
        this.status = "Embarcando";
        this.altitude = 0;
    }

    // 2. Método para atualizar a tela (DOM)
    // Esse método lê os dados do objeto e joga no HTML
    atualizarStatus() {
        document.getElementById('exibir-codigo').innerText = this.codigo;
        document.getElementById('exibir-origem').innerText = this.origem;
        document.getElementById('exibir-destino').innerText = this.destino;
        document.getElementById('exibir-horario').innerText = this.horario;
        document.getElementById('exibir-status').innerText = this.status;
        document.getElementById('exibir-altitude').innerText = this.altitude;

        // Efeito visual na imagem
        const img = document.getElementById('img-aviao');
        if (this.altitude > 0) {
            img.style.transform = "translateY(-10px) scale(1.2)"; // Sobe e aumenta
        } else {
            img.style.transform = "translateY(0) scale(1)"; // Volta ao chão
        }
    }

    // 3. Método Decolar
    decolar() {
        if (this.status !== "Em Voo") {
            this.status = "Em Voo";
            this.altitude = 10000;
            console.log(`Voo ${this.codigo} decolou!`);
            this.atualizarStatus(); // Chama o método para atualizar a tela
        }
    }

    // 4. Método Pousar
    pousar() {
        if (this.status === "Em Voo") {
            this.status = "Finalizado";
            this.altitude = 0;
            console.log(`Voo ${this.codigo} pousou com sucesso.`);
            this.atualizarStatus();
        }
    }
}

// --- INSTANCIAÇÃO (Criando o objeto real) ---

// Criamos um novo voo passando os dados para o constructor
const meuVoo = new Voo("AD123", "São Paulo (GRU)", "Lisboa (LIS)", "14:30");

// Chamamos uma vez para mostrar os dados iniciais na tela assim que carregar
meuVoo.atualizarStatus();