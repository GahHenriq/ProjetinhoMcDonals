for (var a=[],i=0;i<3;++i) a[i]=i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}
a = shuffle(a);
console.log(a)
let cont = 0;
let botao_pergunta = document.getElementById("nextButton");
botao_pergunta.onclick = () => {
    let pergunta = ["POR QUANTO TEMPO DEVEMOS LAVAR AS MÃOS ANTES DE ASSUMIR UMA ESTAÇÃO?", "QUAIS OS QUATRO FUNDAMENTOS BÁSICOS DO MC DONALD’S (QSLV)?", "QUAL A TEMPERATURA DA TOSTADEIRA (PRINCIPAL/AUXILIAR) ?"];
    let resposta = ["20 SEGUNDOS", "QUALIDADE, SERVIÇO, LIMPEZA E VALOR", "TOSTADEIRA PRINCIPAL 293°C E AUXILIAR 204°"];

    let text_pergunta = document.getElementById("resposta");
    let text_resposta = document.getElementById("texto");


    text_pergunta.innerHTML = pergunta[a[cont]];
    text_resposta .innerHTML =  resposta[a[cont]];
    cont++;
}
