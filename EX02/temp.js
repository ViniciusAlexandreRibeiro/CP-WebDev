const readline = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

readline.question("Você gostaria de converter celcius para fareheint ou fareheint para celcius :", (valor) => {
    let opcao1 = "celcius para fareheint" 
    let opcao2 =  "fareheint para celcius"
    
    readline.question(`coloque um valor em ${valor}, para converter :`, (temperatura) => {
        temperatura = parseFloat(temperatura)
        let conversao
    
        if(!isNaN(temperatura)){
            console.error("Error, coloque um numero flutuante por favor")
        }
        else{
            if(valor == opcao1){
                // F = (C * 9/5) + 32.
                conversao = (temperatura * 9/5) + 32
            }
            else if(valor == opcao2){
                // C = (F - 32) * 5/9
                conversao = (temperatura - 32) * 5/9
            }
        }
        readline.close();
    })

    readline.close()
});