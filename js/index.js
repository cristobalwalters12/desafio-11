function obtenerValor() {
  let precio = 40000;
  let inputElement = document.getElementById("input");
  let resultado = document.getElementById("total");
  let cantidad = document.getElementById("cantidad");
  let selector = document.getElementById("selector");
  let color = selector.value;
  let valor = inputElement.value;
  total = precio * valor;
  resultado.textContent = "total: $" + total;
  cantidad.textContent = "Cantidad: " + valor;
  let colorContainer = document.getElementById("colorContainer");
  colorContainer.className = "subcontainer " + color.toLowerCase();
}
