const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btn-login");

if (btnLogin && usuario && password) {
    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        if (usuario.value === "admin" && password.value === "admin") {
            alert("Bienvenido");
            window.location.href = "admi.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
}
