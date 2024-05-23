document.getElementById('pedidoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const inputs = document.querySelectorAll('input[name="bebida"]');
    const selectedBebidas = [];
    inputs.forEach((input) => {
        if (input.value > 0) {
            selectedBebidas.push(`${input.value} ${input.name}`);
        }
    });

    const result = `
        <h3>Informe del Pedido</h3>
        <p><strong>Número de Mesa:</strong> ${mesa}</p>
        <p><strong>Bebidas Seleccionadas:</strong> ${selectedBebidas.join(', ')
