class TelaInicial {
  constructor() {
  }
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textSize(50);
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    text('As Aventuras de', width/2, height/3);
    textSize(150);
    text('Hipsta', width/2, (height/5)*3);
  }
  
  _botao() {
    botaoIniciarJogo.y = (height/7)*5;
    botaoIniciarJogo.draw();
  }
  
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
}