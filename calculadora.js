document.querySelector("#boton-calcular").addEventListener("click", function(){
    const altura = document.getElementById("altura").value;
    const peso = document.querySelector("#peso").value;  
    const imc = calcularIMC(peso, altura);
    document.querySelector("#resultado").innerHTML=imc.toFixed(1);
});

function calcularIMC(peso, altura){
    const imc = peso / (altura**2);
    
    if(imc<16.00) {
        alert("Posible de desnutricion");
    }
    else if(imc<=16.00 || imc<=16.99)
    {
        alert("Delgades Moderada");
    }
    else if (imc<=17.00 || imc<18.49)
    {
        alert("Delgades Aceptable");
    }
    else if (imc<=18.50 || imc<=24.99)
     {
         alert("Peso Normal");
     }
    else if (imc<=25.00 || imc<=29.99)
     {
         alert("Tienes OBESIDAD GRADA I. Riesgo alto para desarrollar enfermedades cardiovasculares");
     }
    else if (imc<=30.00 || imc<=34.99)
     {
        alert("Tienes OBESIDAD GRADA II. Riesgo alto para desarrollar enfermedades cardiovasculares");
     }
   else if (imc<=35.00 || imc<=40.00)
     {
        alert("Tienes OBESIDAD GRADO III. Riesgo muy alto para desarrollar enfermedades cardiovasculares");
     }
   };




 