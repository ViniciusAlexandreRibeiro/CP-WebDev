const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual escala de temperatura você deseja converter? Digite:\n1 para Celsius para Fahrenheit\n2 para Fahrenheit para Celsius\n", (escala) => {
    
        rl.question("Digite a temperatura: ", (temperatura) => {
            const Value = parseFloat(temperatura);
            if (isNaN(temperatura)) {
                console.log("Por favor, insira um valor numérico válido.");
            } else {
                let result

                if(escala === "1"){
                    result = (temperatura * 9 / 5) + 32;
                    console.log(`Temperatura original: ${temperatura}°C`);
                    console.log(`Temperatura convertida: ${result.toFixed(2)}°F`);
                }
                else if(escala === "2"){
                    result = (temperatura - 32) * 5 / 9;
                    console.log(`Temperatura original: ${temperatura}°F`);
                    console.log(`Temperatura convertida: ${result.toFixed(2)}°C`);
                }
                
            }
            rl.close();
        });
});