const readline = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

readline.question("coloque um numero :", (num) => {
    num = parseInt(num)
    if(!isNaN(num)){
        if(num == 0){
            console.log(`o numero ${num} é zero`)
        }else if(num > 0){
            console.log(`o numero ${num} é positivo`)
        }else{
            console.log(`o numero ${num} é negativo`)
        }
    }else{
        console.log("erro coloque um numero por favor")
    }
    readline.close()
})