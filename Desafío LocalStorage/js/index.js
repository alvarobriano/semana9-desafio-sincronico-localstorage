document.addEventListener("DOMContentLoaded", ()=>{

    const datos_guardados = document.getElementById("inputText");
    const envio = document.getElementById("buttonText");

    envio.addEventListener("click", ()=>{
        localStorage.setItem("datos_enviados",datos_guardados.value);
    });
});