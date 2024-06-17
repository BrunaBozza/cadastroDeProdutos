const inputNome = document.getElementById("nome");
const inputArquivo = document.getElementById("arquivo");
const inputValor = document.getElementById("valor");

function adicionarProduto() {
  const nomeProduto = document.createElement("h3");
  const valorProduto = document.createElement("p");
  const divProduto = document.createElement("div");

  if (inputNome.value !== "" && inputValor.value !== "") {
    nomeProduto.textContent = inputNome.value;
    valorProduto.textContent = "Valor: R$" + inputValor.value;

    divProduto.appendChild(nomeProduto);
    divProduto.appendChild(valorProduto);

    if (inputArquivo.files && inputArquivo.files[0]) {
      const imagem = new FileReader();
      imagem.onload = function (e) {
        const imagemProduto = document.createElement("img");
        imagemProduto.src = e.target.result;
        divProduto.appendChild(imagemProduto);

        const secao2 = document.getElementById("secao2");
        secao2.appendChild(divProduto);
        divProduto.classList.add("divProdutos");
      };
      imagem.readAsDataURL(inputArquivo.files[0]);
    } else {
      const secao2 = document.getElementById("secao2");
      secao2.appendChild(divProduto);
      divProduto.classList.add("divProdutos");
    }
  } else if (inputNome.value === "" && inputValor.value === "") {
    alert("Por favor, insira o nome e o valor do produto!");
  } else if (inputNome.value === "") {
    alert("Por favor, insira o nome do produto!");
  } else if (inputValor.value === "") {
    alert("Por favor, insira o valor do produto!");
  }
}