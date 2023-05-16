
/*llaves del codigo*/

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/



function encriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();
    var digitar_texto= texto.replaceAll("e","enter");
    var digitar_texto= digitar_texto.replaceAll("i","imes");
    var digitar_texto= digitar_texto.replaceAll("a","ai"); 
    var digitar_texto= digitar_texto.replaceAll("o","ober");
    var digitar_texto= digitar_texto.replaceAll("u","ufat");

    document.getElementById("mensaje").innerHTML =  digitar_texto;
    /*textArea.value=" ";*/
    mensaje.style.backgroundImage = "none";

}


function desencriptar(){
    var texto = document.getElementById("textArea").value.toLowerCase();
    var digitar_texto= texto.replaceAll("enter","e");
    var digitar_texto= digitar_texto.replaceAll("imes","i");
    var digitar_texto= digitar_texto.replaceAll("ai","a"); 
    var digitar_texto= digitar_texto.replaceAll("ober","o");
    var digitar_texto= digitar_texto.replaceAll("ufat","u");

    document.getElementById("mensaje").innerHTML =  digitar_texto;
    }
    
    function copiar_texto(){
        var copear = document.getElementById("mensaje").value;
        navigator.clipboard.writeText(copear);
        /*mensaje.value=" ";*/
        textArea.value=" ";
    }
    