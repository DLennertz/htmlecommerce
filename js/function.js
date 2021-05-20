var InputValue;

function getTamanhoCamisa(inputV) {

    InputValue = inputV.value;

    console.log(InputValue)
    if (InputValue == "P" || InputValue == "M" || InputValue == "G") {
        document.getElementById("ButaoAddCarrinho").disabled=false;
    }
    
}

function verifyCompra() {

        alert("Produto Adicionado")
    
}

