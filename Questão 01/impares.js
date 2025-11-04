function verificar(){
    let numero = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    if(numero % 2 === 0){
        resultado.innerHTML = `<br>O número ${numero} é <b>PAR.`;
    }else{
        resultado.innerHTML = `<br>O número ${numero} é <b>ÍMPAR.`;
    }
}