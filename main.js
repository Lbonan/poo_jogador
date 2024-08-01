function Jogador(nome, posicao, numeroDaCamisa, time) {
  this.nome = nome;
  this.posicao = posicao;
  this.numeroDaCamisa = numeroDaCamisa;
  this.time = time;
}

function Atacante() {
  Jogador.call(this, "lucas", "Atacante central", 9, "Botafogo");
}

function Defensor() {
  Jogador.call(this, "zé", "Lateral Direito", 32, "São Paulo");
}

function MeioCampo() {
  Jogador.call(this, "zé 2", "meia esquerda", 20, "Bahia");
}

const atacante1 = new Atacante();
console.log(atacante1);

const defensor1 = new Defensor();
console.log(defensor1);

const meioCampo1 = new MeioCampo();
console.log(meioCampo1);
