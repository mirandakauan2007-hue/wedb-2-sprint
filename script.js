// =========================
// BOTÃO EXTRAIR TEXTO
// =========================

document.getElementById("extrairBtn")
.addEventListener("click", function () {

    alert("Texto extraído com sucesso!");

});



// =========================
// BOTÃO TRADUZIR
// =========================

document.getElementById("traduzirBtn")
.addEventListener("click", function () {

    alert("Conteúdo traduzido!");

});



// =========================
// BOTÃO MELHORAR
// =========================

document.getElementById("melhorarBtn")
.addEventListener("click", function () {

    alert("Imagem melhorada com IA!");

});



// =========================
// PROMPT IA
// =========================

document.getElementById("sendBtn")
.addEventListener("click", function () {

    let prompt = document.getElementById("promptInput").value;

    if(prompt == "") {

        alert("Digite um prompt!");

    } 
    
    else {

        alert("IA processando: " + prompt);

    }

});