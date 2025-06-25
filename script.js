function mostraAlternativa() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();