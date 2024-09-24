let currentOperation = '';
let currentInput = '';
let previousInput = '';
let operation = null;

// Função para adicionar números ao visor
function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

// Função para definir a operação atual (+, -, *, /)
function setOperation(op) {
    if (currentInput === '') return;  // Não definir operação sem valor
    if (previousInput !== '') {
        calculateResult();  // Se já houver uma operação, calcula o valor
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

// Função para calcular o resultado com base nos valores e operação
function calculateResult() {
    let result;
    const previous = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(previous) || isNaN(current)) return;  // Verifica se os valores são válidos

    // Executa a operação
    switch (operation) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            result = current === 0 ? 'Erro' : previous / current;  // Prevenção de divisão por zero
            break;
        default:
            return;
    }

    // Atualiza o visor com o resultado
    updateDisplay(result);
    previousInput = result.toString();
    currentInput = '';
    operation = null;
}

// Função para atualizar o visor
function updateDisplay(value) {
    document.getElementById('result').value = value;
}
