function calcularMediaFinal() {
    const inputSoma = document.getElementById("numbersSoma").value;
    const numerosSoma = inputSoma.split(',').map(Number);
    const soma = numerosSoma.reduce((acc, num) => acc + num, 0);

    const inputDivisao = document.getElementById("numbersDivisao").value;
    const numerosDivisao = inputDivisao.split(',').map(Number);
    const divisao = numerosDivisao.reduce((acc, num) => acc / num);

    if (divisao === 0 || isNaN(divisao)) {
        document.getElementById("resultadoMedia").textContent = "Erro: Divisão por zero ou entrada inválida.";
    } else {
        const media = soma / divisao;
        document.getElementById("resultadoMedia").textContent = `A média aritmética é: ${media}`;
    }
}