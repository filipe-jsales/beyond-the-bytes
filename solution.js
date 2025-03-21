/**
 * Verifica se a carteira de um suspeito contém duas notas que somam 150 fulampos
 * @param {number[]} notas - Array ordenado de notas na carteira do suspeito
 * @return {boolean} - Verdadeiro se existirem duas notas somando 150 fulampos, falso caso contrário
 */
function verificarSuspeito(notas) {
  if (notas.length < 2) {
    return false;
  }

  let inicio = 0;
  let fim = notas.length - 1;

  while (inicio < fim) {
    const soma = notas[inicio] + notas[fim];

    if (soma === 150) {
      return true;
    } else if (soma < 150) {
      inicio++;
    } else {
      fim--;
    }
  }

  return false;
}

const carteiraSuspeito1 = [10, 20, 50, 100];
console.log(verificarSuspeito(carteiraSuspeito1));

const carteiraSuspeito2 = [5, 10, 20, 30, 40];
console.log(verificarSuspeito(carteiraSuspeito2));

module.exports = verificarSuspeito; // Para permitir testes
