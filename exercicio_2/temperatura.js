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


readline.question(`coloque um valor em ${valor}, para converter :`, (temperatura) => {
    let temperaturas = parseFloat(temperatura)
    let conversao

    if(!isNaN(temperaturas)){
        console.error("Error, coloque um numero flutuante por favor")
    }
    else{
        if(valor == opcao1){
            // F = (C * 9/5) + 32.
            conversao = (temperaturas * 9/5) + 32
        }
        else if(valor == opcao2){
            // C = (F - 32) * 5/9
            conversao = (temperaturas - 32) * 5/9
        }
    }
    readline.close();
})

