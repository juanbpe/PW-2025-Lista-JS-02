function calcular(){
    let id, n1, n2, n3, md, MA
    id = document.getElementById("aluno").value;
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    n3 = Number(document.getElementById("n3").value);
    md = Number(document.getElementById("md").value);        
    MA = (n1 + n2 * 2 + n3 * 3 + md) / 7;

    let conceito = "";
    let status = "";

    if(MA >= 90){
        conceito = "A";
        status = "Aprovado";
    }else if(MA < 90 && MA >= 75){
        conceito = "B";
        status = "Aprovado";
    }else if(MA < 75 && MA >= 60){
        conceito = "C";
        status = "Aprovado";
    }else if(MA < 60 && MA >= 40){
        conceito = "D";
        status = "Reprovado";
    }else{
        conceito = "E";
        status = "Reprovado";
    }

    document.getElementById("resultado").innerHTML = `<br><br>
                Número do aluno: ${id}<br><br>
                Nota 1: ${n1}<br>
                Nota 2: ${n2}<br>
                Nota 3: ${n3}<br><br>
                Média dos Exercícios: ${md}<br><br>
                Média de Aproveitamento (MA): ${MA.toFixed(2)}<br><br>
                Conceito: ${conceito}<br><br>
                Situação: <b>${status}`
}