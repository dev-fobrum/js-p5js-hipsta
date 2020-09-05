class Vida {
  constructor(total, inicial) {
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;

    this.largura = 25;
    this.altura = 25;
    this.margin = 0;
    this.posicao = 0;
    this.xInicial = 20;
    this.yInicial = 20;
  }

  draw() {
    for ( let i = 0; i < this.vidas; i++) {
      this.margin = i * 10;
      this.posicao = this.xInicial * (1 + i);
      image(imagemCoracao, this.posicao+this.margin, this.yInicial, this.largura, this.altura);
    }
  }
  
  ganhaVida() {
    if(this.vidas <= this.total ) {
      this.vidas++;  
    }
  }
  
  perdeVida() {
    this.vidas--;
  }
}