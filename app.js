let textoUsuario;
let textoEncriptado;
let textoDesencriptado;
let mensajeAdvertenciaInicial;
let mensajeAdvertencia;

function encriptar(){
    textoUsuario = document.getElementById("textoUsuario").value.trim();
    mensajeAdvertenciaInicial = "Solo letras minúsculas y sin acentos";
    mensajeAdvertencia = document.getElementById("msj-advertencia");

    mensajeAdvertencia.textContent = mensajeAdvertenciaInicial;
    mensajeAdvertencia.classList.remove("msj-advertencia2");

    if (textoUsuario === ""){
        mostrarAviso();
        return;
    }else if(!validarAcentosYMayusculas(textoUsuario)){
        mensajeAdvertencia.textContent = "Recuerde ingresar solo letras minúsculas y sin acentos";
        mensajeAdvertencia.classList.add("msj-advertencia2");
        return;
    }
    textoEncriptado = textoUsuario.replace(/[aeiou]/g, function (match) {
        switch (match) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return match;
            }
    });
    
    mostrarResultado(textoEncriptado);
    document.getElementById("textoUsuario").value = "";
}

function desencriptar(){
    textoEncriptado = document.getElementById("textoUsuario").value.trim();
    mensajeAdvertenciaInicial = "Solo letras minúsculas y sin acentos";
    mensajeAdvertencia = document.getElementById("msj-advertencia");

    mensajeAdvertencia.textContent = mensajeAdvertenciaInicial;
    mensajeAdvertencia.classList.remove("msj-advertencia2");

    if (textoEncriptado === ""){
        mostrarAviso();
        return;
    }else if(!validarAcentosYMayusculas(textoEncriptado)){
        mensajeAdvertencia.textContent = "Recuerde ingresar solo letras minúsculas y sin acentos";
        mensajeAdvertencia.classList.add("msj-advertencia2");
        return;
    }
    textoDesencriptado = textoEncriptado
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    mostrarResultado(textoDesencriptado);
    document.getElementById("textoUsuario").value = "";
}
function mostrarResultado(texto) {
    document.getElementById("msj-final-img").style.display = "none";
    document.getElementById("msj-final-aviso").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("textoResultado").value = texto;
}
function mostrarAviso(){
    const pantallaPequeña = window.matchMedia("(max-width:768px)").matches;

    document.getElementById("msj-final-img").style.display = "flex";
    document.getElementById("msj-final-aviso").style.display = "flex";
    document.getElementById("resultado").style.display = "none";
    document.getElementById("textoUsuario").value = "";

    if (pantallaPequeña){
        document.getElementById("msj-final-aviso").style.display = "flex";
        document.getElementById("msj-final-img").style.display = "none";
    }
}
function validarAcentosYMayusculas(texto){
    const regex = /[A-ZÁÉÍÓÚáéíóú]/;
    return !regex.test(texto);
}
function copiarTexto() {
    const textoResultado = document.getElementById("textoResultado").value;
    navigator.clipboard.writeText(textoResultado)
        .then(() => {
            console.log("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}


