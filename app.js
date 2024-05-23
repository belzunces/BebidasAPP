document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const checkboxes = document.querySelectorAll('input[name="bebida"]:checked');
    const selectedBebidas = [];
    checkboxes.forEach((checkbox) => {
        selectedBebidas.push(checkbox.value);
    });
    const result = `
        <h3>Informe del Pedido</h3>
        <p><strong>Número de Mesa:</strong> ${mesa}</p>
        <p><strong>Bebidas Seleccionadas:</strong> ${selectedBebidas.join(', ')}</p>
    `;
    document.getElementById('result').innerHTML = result;
});
