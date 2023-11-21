const container = document.querySelector(".container");
const assentosSelecionados = document.getElementById("qtdAssentos");
const totalPago = document.getElementById("total");

document.addEventListener("DOMContentLoaded", () => {
  container.addEventListener("click", (e) => {
    const assento = e.target.closest(".assento:not(.ocupado)");

    if (assento) {
      assento.classList.toggle("selecionado");
      updateSelectedCount();
    }
  });
});

function updateSelectedCount() {
  const assentos = document.querySelectorAll(".assento.selecionado:not(.info .assento.selecionado)");
  const quantidadeAssentos = assentos.length;
  const precoUnitario = parseFloat(document.getElementById("opcao").value);
  const precoTotal = quantidadeAssentos * precoUnitario;

  assentosSelecionados.textContent = quantidadeAssentos;
  totalPago.textContent = precoTotal.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("tr[data-href]");
  rows.forEach((row) => {
    row.addEventListener("click", () => {
      window.location.href = row.dataset.href;
    });
  });
});

function exibirResumoCompra() {
  const opcaoSelecionadaElement = document.getElementById("opcao");
  const opcaoSelecionada = opcaoSelecionadaElement.options[opcaoSelecionadaElement.selectedIndex].text;
  const qtdAssentos = document.getElementById("qtdAssentos").textContent;
  const total = document.getElementById("total").textContent;

  document.getElementById("modalOpcao").textContent = opcaoSelecionada;
  document.getElementById("modalQtdAssentos").textContent = qtdAssentos;
  document.getElementById("modalTotal").textContent = total;

  document.getElementById("modal").style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function exibirPopupSucesso() {
  alert("Compra processada com sucesso! Aproveite o filme.");
}

function finalizarCompra() {
  const qtdAssentos = document.getElementById("qtdAssentos").textContent;

  if (qtdAssentos === "0") {
    alert("Erro! Você deve escolher um assento.");
  } else {
    setTimeout(() => {
      exibirPopupSucesso();
    }, 1500);
  }
}


