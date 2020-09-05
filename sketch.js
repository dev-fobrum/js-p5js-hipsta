function setup() {
  createCanvas(windowWidth, windowHeight);
  
  telaInicial = new TelaInicial();
  
  jogo = new Jogo();
  jogo.setup();

  frameRate(40);
  somDoJogo.loop();
  
  cenas = {
    telaInicial,
    jogo
  };
  
  botaoIniciarJogo = new Botao('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed();

  if (key === 'Escape') {
    loop();
  }
}

function mousePressed() {
  loop();
}

function draw() {
  cenas[cenaAtual].draw();
}