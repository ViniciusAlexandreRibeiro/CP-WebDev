document.getElementById("calcularDesconto").addEventListener("click", function () {
    const valorTotal = parseFloat(document.getElementById("valorTotal").value);

    if (isNaN(valorTotal) || valorTotal <= 0) {
        document.getElementById("resultado").textContent = "Por favor, insira um valor válido.";
        return;
    }

    let desconto = 0;
    let porcentagemDesconto = 0;

    if (valorTotal > 50 && valorTotal <= 100) {
        porcentagemDesconto = 5;
        desconto = valorTotal * 0.05;
    } else if (valorTotal > 100 && valorTotal <= 200) {
        porcentagemDesconto = 10;
        desconto = valorTotal * 0.10;
    } else if (valorTotal > 200) {
        porcentagemDesconto = 15;
        desconto = valorTotal * 0.15;
    } else {
        document.getElementById("resultado").textContent = "Não há desconto para valores iguais ou inferiores a R$ 50.";
        return;
    }

    const valorComDesconto = valorTotal - desconto;

    document.getElementById("resultado").textContent =
        `Valor original: R$ ${valorTotal.toFixed(2)}\n` +
        `Desconto aplicado: ${porcentagemDesconto}%\n` +
        `Valor final com desconto: R$ ${valorComDesconto.toFixed(2)}`;
});