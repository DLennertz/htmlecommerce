var InputValue;

function getTamanhoCamisa(inputV) {

    InputValue = inputV.value;

    if (InputValue == "P" || InputValue == "M" || InputValue == "G") {
        document.getElementById("ButaoAddCarrinho").disabled=false;
        document.getElementById("aviso").innerHTML = "";
    }
    
}

function verifyCompra() {

        alert("Muito Obrigado pela sua compra!")
    
}



$(document).ready(function (e) {
    
    $("#EscolhaNumeroS").click(function (e) {
        $("#divEscolhaNum").show();
        
    });
    $("#EscolhaNumeroN").click(function (e) {
        $("#divEscolhaNum").hide();
    });


    $("#EscolhaNomeS").click(function (e) {
        $("#divEscolhaNome").show();
    });
    $("#EscolhaNomeN").click(function (e) {
        $("#divEscolhaNome").hide();
    });
});


