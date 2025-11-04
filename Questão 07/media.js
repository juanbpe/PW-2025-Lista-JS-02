function calcular(){
    let n1, n2, md, situacao;
    
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    md = (2 * n1 + 3 * n2) / 5;
    situacao = "";

    if(md >= 60){
        situacao = "Aprovado";
    }else if(md >= 20){
        situacao = "Em prova final";
    }else{
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = `<br>Média: <b>${md.toFixed(2)}</b><br><br>Situação: <b>${situacao}`
}