var InputValue;

function getTamanhoCamisa(inputV) {

    InputValue = inputV.value;

    if (InputValue == "P" || InputValue == "M" || InputValue == "G") {
        document.getElementById("ButaoAddCarrinho").disabled=false;
        document.getElementById("aviso").innerHTML = "";
    }
    
}

function verifyCompra() {

        alert("Compra aprovada! Muito obrigado pela compra! Até mais!")
        
        location.href='./index.html';
        
}

function verifyCompra2() {

    alert("Carrinho vazio, por favor escolha uma camisa!")
    
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


