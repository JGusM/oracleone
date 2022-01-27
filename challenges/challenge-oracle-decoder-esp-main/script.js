/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


/*------------------------ENCRIPTACIÓN DE TEXTO-------------------------------------------------------------*/

var btnEncriptar = document.querySelector("#btn-encriptar");


/*------------------------CAPTURA DEL BOTÓN ENCRIPTAR----------------------------------------------------- */

btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value; //
    var msgEncriptado = document.querySelector("#msg");
    var btnCopiar = document.querySelector("#btn-copy");
    btnCopiar.classList.remove("btn-copiar");


/*--------------------------EJECUCIÓN DE LA FUNCIÓN encriptación--------------------------------------------*/

var codificado = encriptacion(texto);
msgEncriptado.value = codificado;
});


/*------------------------PARA DESENCRIPTAR TEXTO-------------------------------------------------------------*/

var btnDesencriptar= document.querySelector("#btn-desencriptar");

/*-----------------------CAPTURA DEL BOTÓN DESENCRIPTAR----------------------------------------------------- */

btnDesencriptar.addEventListener("click",function(e){
    e.preventDefault();
    
    var title=document.querySelector("#title");
    title.innerHTML="Mensaje desencriptado";
    var textoParaDecodificar = document.querySelector("#input-texto").value;
    
    
/*--------------------------EJECUCIÓN DE LA FUNCIÓN desencriptación--------------------------------------------*/

        var decodificado= desencriptacion(textoParaDecodificar);
        var desencriptado = document.querySelector("#msg");
        desencriptado.value = decodificado;
    }) 


/*--------------------------COPIAR------------------------------------------------------------------------------ */

var btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click",function(){
    let texto = document.querySelector("#msg");
    texto.select();
    document.execCommand("copy");
})


/*--------------------------FUNCIÓN PARA ENCRIPTAR-------------------------------------------------------------- */

function encriptacion(texto) {
    
    var encriptado = texto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    
    return encriptado;
}

/*--------------------------FUNCIÓN PARA DESENCRIPTAR-------------------------------------------------------------- */

function desencriptacion(texto){
    var desencriptado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    return desencriptado;
  }
  
  
 
