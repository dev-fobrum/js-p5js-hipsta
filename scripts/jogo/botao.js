class Botao {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.addClass('botao-tela-inicial');
    this.draw();
  }
  
  _alteraCena() {
    this.botao.remove();
    cenaAtual = 'jogo'
  }
  
  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
    this.botao.mousePressed(() => this._alteraCena())
  }
}