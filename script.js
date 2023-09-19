const contadorBtn = document.getElementById('contadorBtn');
let contador = 0;

contadorBtn.addEventListener('click', () => {
    contador++;
    contadorBtn.innerText = contador;
});
