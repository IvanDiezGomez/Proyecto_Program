const usuario=document.getElementById("usuario");
const password=document.getElementById("password");
const btnLogin=document.getElementById("btn-login");


const usuario1="admin";
const password1="admin";

    
btnLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    if(usuario.value===usuario1 && password.value===password1){
        alert("Bienvenido");
        window.location.href="admi.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
});
