var nome = document.querySelector(".tituloNome");
nome.textContent="Aparecida Nascimento";

var pesoPrimeiroPaciente = document.querySelector(".pesoPrimeiro");
var alturaPrimeiroPaciente = document.querySelector(".alturaPrimeiro");
var imcPrimeiroPaciente = document.querySelector(".imcPrimeiro");

var calculoImc = pesoPrimeiroPaciente.textContent / (alturaPrimeiroPaciente.textContent*alturaPrimeiroPaciente.textContent);

imcPrimeiroPaciente.textContent = calculoImc;



   var validarAltura = true;
   var validarPeso = true;

    if(pesoPrimeiroPaciente.textContent <= 0 || pesoPrimeiroPaciente.textContent>=1000){
        console.log("Peso Invalido");
        validarPeso=false;
        imcPrimeiroPaciente.textContent="Peso Invalido";
    }
    if(alturaPrimeiroPaciente.textContent <=0 || alturaPrimeiroPaciente.textContent >=3){
        console.log("Altura Invalida");
        validarAltura=false;
        imcPrimeiroPaciente.textContent="Altura Invalida";
    }
    

