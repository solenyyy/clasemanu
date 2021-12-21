function randomNum() {
    const numeroDado = Math.round(Math.random()*(6-1)) + 1;
  document.getElementById('result').innerHTML = numeroDado;
}