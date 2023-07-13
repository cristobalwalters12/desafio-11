function obtenerValor() {
  let precio = 40000;
  let inputElement = document.getElementById("input");
  let resultado = document.getElementById("total");
  let cantidad = document.getElementById("cantidad");
  let selector = document.getElementById("selector");
  let colorContainer = document.getElementById("colorContainer");
  let color = selector.value;
  let valor = inputElement.value;
  total = precio * valor;
  resultado.textContent = "Total: $" + total;
  cantidad.textContent = "Cantidad: " + valor;
  colorContainer.className = "subcontainer " + color.toLowerCase();
}
