const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual escala de temperatura você deseja converter? Digite:\n1 para Celsius para Fahrenheit\n2 para Fahrenheit para Celsius\n", (escala) => {
    if (escala === "1") {
        rl.question("Digite a temperatura em Celsius: ", (celsius) => {
            const celsiusValue = parseFloat(celsius);
            if (isNaN(celsiusValue)) {
                console.log("Por favor, insira um valor numérico válido.");
            } else {
                const fahrenheit = (celsiusValue * 9 / 5) + 32;
                console.log(`Temperatura original: ${celsiusValue}°C`);
                console.log(`Temperatura convertida: ${fahrenheit.toFixed(2)}°F`);
            }
            rl.close();
        });
    } else if (escala === "2") {
        rl.question("Digite a temperatura em Fahrenheit: ", (fahrenheit) => {
            const fahrenheitValue = parseFloat(fahrenheit);
            if (isNaN(fahrenheitValue)) {
                console.log("Por favor, insira um valor numérico válido.");
            } else {
                const celsius = (fahrenheitValue - 32) * 5 / 9;
                console.log(`Temperatura original: ${fahrenheitValue}°F`);
                console.log(`Temperatura convertida: ${celsius.toFixed(2)}°C`);
            }
            rl.close();
        });
    } else {
        console.log("Opção inválida. Por favor, escolha 1 ou 2.");
        rl.close();
    }
});