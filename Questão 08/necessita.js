function calcular(){
    let n1, n2, md, naf1, naf2, menorNecessaria;

    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    md = (2 * n1 + 3 * n2) / 5;
    naf1 = 120 - md;
    naf2 = (300 - 2 * n1) / 3;
    menorNecessaria = Math.min(naf1, naf2);

    if(md >= 60){
        document.getElementById("resultado").innerHTML = `<br>Média: <b>${md.toFixed(2)}</b><br><br>Você já está <b>aprovado</b>!`;
        return;
    }else if(md < 20){
        document.getElementById("resultado").innerHTML = `<br>Média: <b>${md.toFixed(2)}</b><br><br>Você foi <b>reprovado</b> direto!`;
        return;
    }

    document.getElementById("resultado").innerHTML = `<br>Sua média atual é: <b>${md.toFixed(2)}</b>.<br><br>Você precisa tirar <b>${menorNecessaria.toFixed(2)}</b> na Prova Final para ser aprovado`;
}