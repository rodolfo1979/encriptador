


function copiarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function borrarAccion() {
    document.getElementById("texto").value = "";
}

function borrarResultado() {
    document.getElementById("resultado").value = "";
}

function encriptar(texto) {
    // Validar que solo se utilicen letras minúsculas
    if (/[^a-z]/.test(texto)) {
        return alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales");
    }
    
    let encriptado = texto.replace(/e/g, 'enter');
    encriptado = encriptado.replace(/i/g, 'imes');
    encriptado = encriptado.replace(/a/g, 'ai');
    encriptado = encriptado.replace(/o/g, 'ober');
    encriptado = encriptado.replace(/u/g, 'ufat');
    
    return encriptado;
}

function desencriptar(texto) {
    // Validar que solo se utilicen letras minúsculas
    if (/[^a-z]/.test(texto)) {
        
        return alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales");
    }
    
    let desencriptado = texto.replace(/enter/g, 'e');
    desencriptado = desencriptado.replace(/imes/g, 'i');
    desencriptado = desencriptado.replace(/ai/g, 'a');
    desencriptado = desencriptado.replace(/ober/g, 'o');
    desencriptado = desencriptado.replace(/ufat/g, 'u');
    
    return desencriptado;
}

function realizarAccion() {
    var texto = document.getElementById("texto").value;
    var accion = document.querySelector('input[name="accion"]:checked').value;
    var resultado;
    console.clear();
    if (accion == "encriptar") {
        resultado = encriptar(texto);
        
        generarConfeti();
        
    } else if (accion == "desencriptar") {
        resultado = desencriptar(texto);
        
        generarConfeti();
        
    }
    
    document.getElementById("resultado").value = resultado;
}

function generarConfeti() {//Funcion para generar confeti.
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#00ff00', '#0000ff','#00fff0','#f0f0ff'],
        shapes: ['square', 'circle'],
        disableForReducedMotion: true
    });
}

