function validar() {
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    // Exemplo de verificação simples
    if (user === "Vortex" && pass === "Admin123") {
        alert("Acesso Autorizado!");
        // Redirecionar para o script ou função do Frida aqui
    } else {
        alert("Acesso Negado!");
    }
}

// Bloqueio adicional para console
setInterval(() => {
    console.clear();
}, 1000);
