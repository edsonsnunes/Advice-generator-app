const gerarTexto = document.getElementById("botao").addEventListener("click", async function () {
    const url = 'https://api.adviceslip.com/advice'
    const dados = await fetch(url);
    const frase = await dados.json()
    console.log(frase.slip.advice)
    const texto = document.getElementById("texto")
    texto.innerText = `"${frase.slip.advice}"`
    const titulo = document.getElementById("titulo")
    titulo.innerHTML = "A D V I C E # "
    titulo.innerText += frase.slip.id
})