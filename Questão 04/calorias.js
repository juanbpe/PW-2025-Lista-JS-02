function calcular(){
    let prato, sobremesa, bebida, total
    prato = Number(document.getElementById("prato").value);
    sobremesa = Number(document.getElementById("sobremesa").value);
    bebida = Number(document.getElementById("bebida").value);
    total = prato + sobremesa + bebida;

    document.getElementById("resultado").innerHTML = `<br><br>A refeição possui um total de <b>${total}</b> calorias.`;
}