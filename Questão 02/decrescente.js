function ordenar(){
    let n1, n2, n3, resultado, numeros 
    n1 = Number(document.getElementById("num1").value);
    n2 = Number(document.getElementById("num2").value);
    n3 = Number(document.getElementById("num3").value);
    resultado = document.getElementById("resultado");
    numeros = [n1, n2, n3];
    numeros.sort((a, b) => b - a);

    resultado.innerHTML = `<br>Ordem decrescente: <b>${numeros.join(" , ")}`;
}