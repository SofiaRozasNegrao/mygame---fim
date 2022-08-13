let aviao, aviaoImg
let terra
let boom, boomImg
let asteroide, asteroideImg, ast
let estadoDoJogo=0
let jogo
let grupoAst
let pontuacao=300, pontos=0, pontuacao2=330, vidas=10
let reset, resetImg

function setup() {
  createCanvas(windowWidth,windowHeight);

  asteroideImg= loadImage("../assets/ast.png")

  aviao=createSprite(400,windowHeight/2,50,50)
  aviaoImg=loadImage("../assets/aviao.png")
  aviao.addImage(aviaoImg)
  aviao.scale=0.8

  terra=loadImage("../assets/terra.png")
}

function draw() {
  background(terra);  

  jogo=new Jogo

  asteroide=new Ast

  if(estadoDoJogo===0){
    textSize(52)
    fill("white")
    text("Clique na tecla da direita para começar o jogo!!!",450,400)
  }

  if(estadoDoJogo===0 && keyDown(RIGHT_ARROW)){
    estadoDoJogo=1
  }

  if(estadoDoJogo===1){
    jogo.jogando(aviao)
    asteroide.cria(ast)

    fill("lightBlue")
    textSize(25)
    text("Quantidade de asteróides destruídos:"+pontos,windowWidth/4+130,100)
    text("Vidas restantes:"+vidas,windowWidth/4-100,100)
  }

  if(estadoDoJogo===2){
    swal({
      title:`Parabéns voce conseguiu `+pontos+` pontos!`,
      text:"Clique na tecla de espaço e reinicie",
      confirmButtonText:"Obrigada por jogar!"
    })
  }

  jogo.reset()

  drawSprites();
} 