const valor = document.querySelector('#valor');
const parcelas = document.querySelector('#parcelas');
const button = document.querySelector('button');
const totalSpan = document.querySelector('#total');
const jurosSpan = document.querySelector('#juros');

const checkValor = () => !valor.value || valor.value[0] === '0' ? alert('Digite um valor válido!') : checkParcelas();

const showInfos = (totalAPagar, juros) => {
  totalSpan.innerHTML = `R$ ${totalAPagar.toFixed(2)}`;
  jurosSpan.innerHTML = `R$ ${juros.toFixed(2)}`;
}

/*FV = PV x (1+i)^n
  FV - valor futuro
  PV - valor inicial
  i - % de juros
  n - numero de parcelas
*/

const calcularJuros = (parcelas) => {
  const valorInicial = parseFloat(valor.value);
  const numeroDeParcelas = parcelas;
  const jurosPorcentagem = 5/100;
  const totalAPagar = valorInicial*[(1+jurosPorcentagem)**numeroDeParcelas]
  const juros = totalAPagar - valorInicial
  showInfos(totalAPagar, juros)
}

const checkParcelas = () => {
  if(parcelas.value === 'Selecione as parcelas'){
    alert('Selecione parcelas válidas!')
  } else {
  calcularJuros(parseInt(parcelas.value));
  }
}

button.addEventListener('click', () => {
  checkValor();
})