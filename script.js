// Função para registrar um carro (POST)
document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const model = document.getElementById('model').value;
    const plate = document.getElementById('plate').value;

    const carro = {
        modelo: model,
        placa: plate,
    };

    fetch('http://cnms-parking-api.net.uztec.com.br/api/v1/entry', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ plate: plate, model: model })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').textContent = 'Carro registrado com sucesso!';
    })
    .catch(error => {
        document.getElementById('resultado').textContent = 'Erro ao registrar carro.';
        console.error('Erro:', error);
    });
});

