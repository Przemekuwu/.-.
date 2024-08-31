const numBicicletas = 140;
const numDias = 30;
const numEstaciones = 12;

function generarEstacionAleatoria() {
  return `E${Math.floor(Math.random() * numEstaciones) + 1}`;
}

function generarMatrizTransicion() {
  let matriz = [];

  for (let i = 0; i < numBicicletas; i++) {
    let fila = [];
    for (let j = 0; j < numDias; j++) {
      fila.push(generarEstacionAleatoria());
    }
    matriz.push(fila);
  }

  return matriz;
}

function mostrarMatrizTransicion(matriz) {
  const tabla = document.getElementById('matrizTransicion');

  let encabezado = "<tr><th>Bicicleta</th>";
  for (let i = 1; i <= numDias; i++) {
    encabezado += `<th>Día ${i}</th>`;
  }
  encabezado += "</tr>";
  tabla.innerHTML = encabezado;

  matriz.forEach((fila, index) => {
    let filaHTML = `<tr><td>B${index + 1}</td>`;
    fila.forEach(estacion => {
      filaHTML += `<td>${estacion}</td>`;
    });
    filaHTML += "</tr>";
    tabla.innerHTML += filaHTML;
  });
}

document.getElementById('generarCadenaBtn').addEventListener('click', () => {
  const matrizTransicion = generarMatrizTransicion();
  mostrarMatrizTransicion(matrizTransicion);
});
