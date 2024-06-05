function verificarPalindromo() {
  // Obtém o valor digitado pelo usuário no campo de entrada e converte para letras maiúsculas
  let palavra = document.getElementById("palavra").value.toUpperCase();
  let palavraInvertida = "";  // Inicializa a variável para armazenar a palavra invertida
  let ehPalindromo = "";      // Inicializa a variável para armazenar o resultado da verificação de palíndromo

  // Inverte a palavra
  for (let i = palavra.length - 1; i >= 0; i--) {
      palavraInvertida += palavra[i];  // Adiciona cada letra da palavra original na ordem inversa
  }

  // Verifica se a palavra original é igual à palavra invertida
  ehPalindromo = (palavra === palavraInvertida) ? "SIM" : "NÃO";

  // Atualiza o conteúdo do elemento HTML para mostrar a palavra invertida
  document.getElementById("resultadoInvertido").textContent = "Palavra invertida: " + palavraInvertida;
  // Atualiza o conteúdo do elemento HTML para mostrar se a palavra é um palíndromo
  document.getElementById("resultadoPalindromo").textContent = "É palíndromo: " + ehPalindromo;
}
