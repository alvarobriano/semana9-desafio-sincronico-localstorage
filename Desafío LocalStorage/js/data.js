document.addEventListener("DOMContentLoaded", ()=>{

    const data_mostrar = document.getElementById("data");
    const datos_guardados = localStorage.getItem("datos_enviados");

    if (datos_guardados) {
        //data_mostrar.textContent = datos_guardados;
        data_mostrar.innerHTML = `${datos_guardados}`;
    }
    else {
        alert("No hay datos enviados");
    }
});