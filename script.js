
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
var textoEntrada=document.querySelector('#input-texto');
var botonEncriptar=document.querySelector('#btn-encriptar')
var textoEncriptado=document.querySelector('#msg');
var botonDesencriptar=document.querySelector('#btn-desencriptar');
var botonCopiar=document.querySelector('#btn-copy');


botonEncriptar.addEventListener('click',function (event) {
    event.preventDefault()
    var mensaje=textoEntrada.value;
    var mensajeEncriptado='';
    for (let index = 0; index < mensaje.length; index++) {
        if (mensaje[index]=='a') {
            mensajeEncriptado=mensajeEncriptado+ 'ai'

        }else if (mensaje[index]=='e'){
            mensajeEncriptado=mensajeEncriptado+ 'enter'

        }else if (mensaje[index]=='i'){
            mensajeEncriptado=mensajeEncriptado+ 'imes'

        }else if (mensaje[index]=='o'){
            mensajeEncriptado=mensajeEncriptado+ 'ober'
        }else if (mensaje[index]=='u'){
            mensajeEncriptado=mensajeEncriptado+ 'ufat'

        }else {
            mensajeEncriptado=mensajeEncriptado+ mensaje[index]
        }
        
    }
    textoEncriptado.value=mensajeEncriptado;
    textoEntrada.value ='';
    console.log(mensaje);  

})


botonDesencriptar.addEventListener('click',function (event) {
    event.preventDefault()

    var mensaje=textoEntrada.value;
    mensaje=mensaje.replace(/enter/gi,'e');
    mensaje=mensaje.replace(/imes/gi,'i');
    mensaje=mensaje.replace(/ai/gi,'a');
    mensaje=mensaje.replace(/ober/gi,'o');
    mensaje=mensaje.replace(/ufat/gi,'u');

    textoEncriptado.value=mensaje

})

botonCopiar.addEventListener('click',function (event) {
    event.preventDefault();
    textoEncriptado.focus();
    document.execCommand('selectAll');
    document.execCommand('copy')
})


