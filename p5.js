var tela, largura, altura, xMenu, yMenu2, yMenu3, yMenu4, xVoltar, yVoltar, alturaVoltar, larguraVoltar;

var imgReinounido, imgEua, imgFranca, imgBrasil, imgAlemanha, imgCanada, imgEspanha, imgIndia, imgViatna, imgJapao, imgCoreiadosul, imgChina;

var telaErro, telaSucesso;

var usuarioRespondeuCerto, usuarioRespondeuErrado;

var resposta;

var xReinounido, yReinounido, xEua, yEua, xFranca, yFranca, xBrasil, yBrasil, xAlemanha, yAlemnha, xCanada, yCanada,xEspanha, yEspanha, xIndia, yIndia, xViatna, yViatna, xJapao, yJapao, xCoreiadosul, yCoreiadosul, xChina, yChina;

function preload(){
  
  imgReinounido = loadImage('imagens/reinounido.png');
  imgEua = loadImage('imagens/eua.png');
  imgFranca = loadImage('imagens/franca.png');
  imgBrasil = loadImage('imagens/brasil.png');
  imgAlemanha = loadImage('imagens/alemanha.png');
  imgCanada = loadImage('imagens/canada.png');
  imgEspanha = loadImage('imagens/espanha.png');
  imgIndia = loadImage('imagens/india.png');
  imgViatna = loadImage('imagens/viatna.png');
  imgJapao = loadImage('imagens/japao.png');
  imgCoreiadosul = loadImage('imagens/coreiadosul.png');
  imgChina = loadImage('imagens/china.png');

}


function setup() {
  createCanvas(325, 400);
  tela = 1;
  largura = 200;
  altura = 50;
  xMenu = 50;
  yMenu2 = 85;
  yMenu3 = 145;
  yMenu4 = 205;
  xVoltar = 230;
  yVoltar = 350;
  xProximaFase = 160;
  yProximaFase = 350;
  xReinounido = 20;
  yReinounido = 80;
  xEua = 20;
  yEua = 200;
  xFranca = 160;
  yFranca = 80;
  xBrasil = 160;
  yBrasil = 200;
  xAlemanha = 20;
  yAlemanha = 80;
  xCanada = 20;
  yCanada = 200;
  xEspanha = 160;
  yEspanha = 80;
  xIndia = 160;
  yIndia = 200;
  xViatna = 20;
  yViatna = 80;
  xJapao = 20;
  yJapao = 200;
  xCoreiadosul = 160;
  yCoreiadosul = 80;
  xChina = 160;
  yChina = 200;
  alturaVoltar = 48;
  larguraVoltar = 70;
  alturaBandeira = 128;
  larguraBandeira = 128;
  usuarioRespondeuCerto = false;
  usuarioRespondeuErrado = false;
}

function draw() {
  textStyle(NORMAL);
  
  background(5);
  
  switch(tela) {
    case 1:
      exibirMenu();    
      break;
    case 2:
      faseUm();
      break;
    case 3:
      exibirInstrucoes();
      break;
    case 4:
      exibirCreditos();
      break;
    case 5:
      faseDois();
      break;
    case 6:
      faseTres();
      break;
    case 7:
      iniciar();
      break
  }
}

function exibirMenu() {
   textSize(40);
   fill("red");
   noStroke();
   text("F L A G S", 60, 50);
  
  textSize(26);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura) {
    stroke(200);
    fill("orange");
    rect(xMenu, yMenu2, largura, altura, 15);
    
    if(mouseIsPressed) {
       tela = 7;
      
    }
  }  
  
  fill("white");
  noStroke();
  text("Iniciar", 100, 120);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(200);
    fill("orange");
    rect(xMenu, yMenu3, largura, altura, 15);
    
    if(mouseIsPressed) {
       tela = 3;
    }
  }
  
  fill("white");
  noStroke();
  text("Instruções", 100, 180);
  
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
    stroke(200);
    fill("orange");
    rect(xMenu, yMenu4, largura, altura, 15);
    
    if(mouseIsPressed) {
       tela = 4;
    }
  }  
  
  fill("white");
  noStroke();
  text("Créditos", 100, 240);
}
  
function iniciar(){
  textSize(40);
  fill("purple");
  noStroke();
  text("F L A G S", 75, 80)
  text("Você deseja\n continuar?", 60, 180);
  
  textSize(25);
  fill("white");
  proximaFase(2);
  
  textSize(25);
  fill("white");
  voltar();
}

function faseUm() {
  textSize(25);
  
  fill("white");
  
  text("Qual a bandeira do Brasil?", 5, 70);
  
  textSize(20);
  
  if (usuarioRespondeuCerto) {
      textSize(25);
      fill("white");
      proximaFase(5);
  } 
  
  if (usuarioRespondeuErrado) {
     textSize(25);
     fill("white");
     text(resposta, 5, 30);
  }
  
  clickErro(xReinounido, yReinounido);

  image(imgReinounido, 20, 80);
  
  clickErro(xEua, yEua);
  
  image(imgEua, 20, 200);
  
  clickErro(xFranca, yFranca);
  
  image(imgFranca, 160, 80);
  
  clickAcerto(xBrasil, yBrasil);
  
  image(imgBrasil, 160, 200);
  
  voltar();
}

function faseDois(){
  textSize(25);
  
  fill("white");
  
  text("Qual a bandeira do Canadá?", 5, 70);
  
  textSize(20);
  
  if (usuarioRespondeuCerto) {
      textSize(25);
      fill("white");
      proximaFase(6);
  }
  
    if (usuarioRespondeuErrado) {
     textSize(25);
     fill("white");
     text(resposta, 5, 30);
  }
  
   clickErro(xAlemanha, yAlemanha);
  
  image(imgAlemanha, 20, 80);
  
  clickAcerto(xCanada, yCanada);
  
  image(imgCanada, 20, 200);
  
   clickErro(xEspanha, yEspanha);
  
  image(imgEspanha, 160, 80);
  
   clickErro(xIndia, yIndia);
  
  image(imgIndia, 160, 200);
  
  voltar();
  
}

function faseTres() {
  
  textSize(25);
  
  fill("white");
  
  text("Qual a bandeira do Viatnã?", 5, 70);
  
  textSize(20);
  
  if (usuarioRespondeuCerto) {
      textSize(25);
      fill("white");
      text(resposta, 5, 30);
  }
  
    if (usuarioRespondeuErrado) {
     textSize(25);
     fill("white");
     text(resposta, 5, 30);
  }

  clickAcerto(xViatna, yViatna);
  
  image(imgViatna, 20, 80);
  
   clickErro(xJapao, yJapao);
  
  image(imgJapao, 20, 200);
  
   clickErro(xCoreiadosul, yCoreiadosul);
  
  image(imgCoreiadosul, 160, 80);
  
   clickErro(xChina, yChina);
  
  image(imgChina, 160, 200);
  
  voltar();
  
}


function exibirInstrucoes() {
  textSize(36);
  
  fill("white");
  
  text("Instruções", 60, 70);
  
  textSize(20);
  
  text("Use o mouse para selecionar\na opção correta.", 20, 120);
  text("Selecionando a opção correta\nvocê passará para a próxima\nfase.", 20, 200);
  text("O objetivo do jogo é acertar\ntodas as bandeiras que\naparecer no jogo.", 20, 300);
  
  voltar();
}

function exibirCreditos() {
  textSize(38);
  
  fill("white");
  
  text("Créditos", 60, 70);
  
  textSize(20);
  
  text("Autora: Letícia de Macena", 20, 150)
  text("Graduanda do curso de\nCiências & Tecnologia da\nUFRN", 40, 200);
  text("Professor: Rummenigge Dantas", 15, 300)
  
  voltar();
}

function voltar() {
  if(mouseX > xVoltar && mouseX < xVoltar + larguraVoltar && mouseY > yVoltar && mouseY < yVoltar + alturaVoltar){
    stroke(200);
    fill("orange");
    rect(xVoltar, yVoltar, larguraVoltar, alturaVoltar, 15);
    
    if(mouseIsPressed) {
       tela = 1;
       usuarioRespondeuCerto = false;
       usuarioRespondeuErrado = false;
       resposta = "";
    }
  }
  
  
  textSize(23);
  fill("white");
  noStroke();
  text("Voltar", 235, 380);
}

function proximaFase(proximaTela) {
  if(mouseX > xProximaFase && mouseX < xProximaFase + larguraVoltar && mouseY > yProximaFase && mouseY < yProximaFase + alturaVoltar){
    stroke(200);
    fill("orange");
    rect(xProximaFase, yProximaFase, larguraVoltar, alturaVoltar, 15);
    
    if(mouseIsPressed) {
       tela = proximaTela;
       usuarioRespondeuCerto = false;
       resposta = "";
    }
  }
  
  
  textSize(23);
  fill("white");
  noStroke();
  text("Seguir", 160, 380);
}

function clickAcerto(xBandeira, yBandeira) {
  if(mouseX > xBandeira && mouseX < xBandeira + larguraBandeira && mouseY > yBandeira && mouseY < yBandeira + alturaBandeira){
    stroke(200);
    noStroke();
    fill("black");
    rect(xBandeira, yBandeira, larguraBandeira, alturaBandeira, 15);
    
    if(mouseIsPressed) {
      usuarioRespondeuCerto = true;
      resposta = "Parabéns, você conseguiu!!";
    }
  }
}

function clickErro(xBandeira, yBandeira) {
  if(mouseX > xBandeira && mouseX < xBandeira + larguraBandeira && mouseY > yBandeira && mouseY < yBandeira + alturaBandeira){
    stroke(200);
    noStroke();
    fill("black");
    rect(xBandeira, yBandeira, larguraBandeira, alturaBandeira, 15);
    
    if(mouseIsPressed) {
      usuarioRespondeuErrado = true;
      resposta = "Eita, acho que você errou!!";
    }
  }
}
