let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let jogoAutomatico = true;

function verificarLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparaLista(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla, condicao) {
  if (condicao === false) {
    document.getElementById(tecla).style.background = "#008000";
    document.getElementById(tecla).style.color = "#fff";
  } else {
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#fff";
  }
}

function comparaLista(letra) {
  const position = palavraSecretaSorteada.indexOf(letra);
  if (position < 0) {
    tentativas--;
    carregaImagemForca();

    if (tentativas === 0) {
      abreModal(
        "Você perdeu!",
        "A palavra secreta era:<br> " + palavraSecretaSorteada
      );
      piscarBotaoJogarNovamente(true);
    }
  } else {
    mudarStyleLetra("tecla-" + letra, false);
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] === letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (let i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] !== listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria === true) {
    tentativas = 0;
    abreModal("Você venceu!", "Parabéns, você acertou a palavra secreta!");
    piscarBotaoJogarNovamente(true);
  }
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('../img_forca/forca.png')";
      break;
  }
}

function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;

  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}

let btnReiniciar = document.querySelector("#btn-reiniciar");
btnReiniciar.addEventListener("click", function () {
  abreModal("Luis Henrique - Portfolio","https://capitaozila.github.io/Port/")
});

const modal = document.getElementById("modal-alerta");
const btnAbreModal = document.getElementById("abreModalAddPalavra");

btnAbreModal.onclick = function () {
  modal.style.display = "block";
  btnAbreModal.innerHTML =
    "<i class='bx bx-message-square-add bx-rotate-270' ></i>";
};

const btnFechaModal = document.getElementById("fechaModal");

btnFechaModal.onclick = function () {
  modal.style.display = "none";
  document.getElementById("addPalavra").value = "";
  document.getElementById("addCategoria").value = "";
};

window.onclick = function () {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("addPalavra").value = "";
    document.getElementById("addCategoria").value = "";
  }
};