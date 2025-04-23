const readline = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

let valor = readline.question("Você gostaria de converter celcius para fareheint ou fareheint para celcius :", (valor) => {
    let opcao1 = "celcius para fareheint" 
    let opcao2 =  "fareheint para celcius"

    readline.close()
    return valor
});

let teste = readline.prompt("teste");

console.log("teste")



