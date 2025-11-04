function calculo(){
    let altura, peso, imc

    altura = Number(document.getElementById('altura').value);
    peso = Number(document.getElementById('peso').value);
    imc = peso / (altura * altura);

    if(!altura || !peso){
        alert("Por favor, insira valores válidos de altura e peso!")
        return;
    }
    
    if(altura > 3){
        alert("A altura deve ser informada em METROS (exemplo: 1.75).");
        return;
    }

    document.getElementById('imc').innerHTML = `Seu IMC equivale a ${imc}`

    if(imc < 18.5){
        document.getElementById('estado').innerHTML = `Você está magro demais!`
    }
    
    if(imc > 18.5 && imc < 24.9){
        document.getElementById('estado').innerHTML = `Você está saudável!`
    }

    if(imc > 25.0 && imc < 29.9){
        document.getElementById('estado').innerHTML = `Você está sobrepeso!`
    }

    if(imc > 30.0 && imc < 39.9){
        document.getElementById('estado').innerHTML = `Você está obeso!`
    } 

    if(imc > 40.0){
        document.getElementById('estado').innerHTML = `Você está extremamente obeso!`
    }
}