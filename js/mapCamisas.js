
var prodDetail = [

    { id: "0", titulo: "CAMISA BARCELONA 2020", subtitulos: "N# 10 Masculina", img: "./imagens/BarcelonaMasc.jpg", preco: p = 325, parcela: (p / 10), descricao: "A camisa titular do Barcelona para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },
    { id: "1", titulo: "CAMISA BARCELONA 2020", subtitulos: "N# 10 Feminina", img: "./imagens/BarcelonaFem.jpg", preco: p = 325, parcela: (p / 10), descricao: "A camisa titular do Barcelona para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },

    { id: "2", titulo: "CAMISA BOTAFOGO 2020", subtitulos: "N# 10 Masculina", img: "./imagens/BotafogoMasc.jpg", preco: p = 200, parcela: (p / 10), descricao: "A camisa titular do Botafogo para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },
    { id: "3", titulo: "CAMISA BOTAFOGO 2020", subtitulos: "N# 10 Feminina", img: "./imagens/BotafogoFem.jpg", preco: p = 200, parcela: (p / 10), descricao: "A camisa titular do Botafogo para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },

    { id: "4", titulo: "CAMISA FLAMENGO 2020", subtitulos: "N# 10 Masculina", img: "./imagens/FlamengoMasc.jpg", preco: p = 310, parcela: (p / 10), descricao: "A camisa titular do Flamengo para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },
    { id: "5", titulo: "CAMISA FLAMENGO 2020", subtitulos: "N# 10 Feminina", img: "./imagens/FlamengoFem.jpg", preco: p = 310, parcela: (p / 10), descricao: "A camisa titular do Flamengo para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },

    { id: "6", titulo: "CAMISA FLUMINENSE 2020", subtitulos: "N# 10 Masculina", img: "./imagens/FluminenseMasc.jpg", preco: p = 250, parcela: (p / 10), descricao: "A camisa titular do Fluminense para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },
    { id: "7", titulo: "CAMISA FLUMINENSE 2020", subtitulos: "N# 10 Feminina", img: "./imagens/FluminenseFem.jpg", preco: p = 250, parcela: (p / 10), descricao: "A camisa titular do Fluminense para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },

    { id: "8", titulo: "CAMISA SAO PAULO 2020", subtitulos: "N# 10 Masculina", img: "./imagens/SaoPauloMasc.jpg", preco: p = 150, parcela: (p / 10), descricao: "A camisa titular do Sao Paulo para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },
    { id: "9", titulo: "CAMISA SAO PAULO 2020", subtitulos: "N# 10 Feminina", img: "./imagens/SaoPauloFem.jpg", preco: p = 150, parcela: (p / 10), descricao: "A camisa titular do Sao Paulo para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },

    { id: "10", titulo: "CAMISA VASCO 2020", subtitulos: "N# 10 Masculina", img: "./imagens/VascoMasc.jpg", preco: p = 300, parcela: (p / 10), descricao: "A camisa titular do Vasco para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },
    { id: "11", titulo: "CAMISA VASCO 2020", subtitulos: "N# 10 Feminina", img: "./imagens/VascoFem.jpg", preco: p = 300, parcela: (p / 10), descricao: "A camisa titular do Vasco para 2021, fabricada pela Kappa, é a opção correta para os torcedores demonstrarem sua paixão pelo Alvinegro Carioca. Mais detalhes: Composição: 95% Poliéster e 05% Elastano" },

]

document.getElementById("container").innerHTML = prodDetail.map((prod, index) => {
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    if (prod.id == id) {
        return (
            `<div id="principal">
    
                <div id="camisa">
                    <img src="${prod.img}" width="100%" height="100%"/>
                </div>
                <div id="divInfoCamisa">
                    <div id="ProdHeader">
                        <h1>${prod.titulo}</h1>
                        <h3>${prod.subtitulos} </h3>
                    </div>
    
                    <div id="EscolhaTamanho" >
                        <h2>Escolha um tamanho:</h2>
                        <label for="P">P</label>
                        <input type="Radio" id="P" name="tamanhoCamisa" value="P">
                        <label for="M">M</label>
                        <input type="Radio" id="M" name="tamanhoCamisa" value="M">
                        <label for="G">G</label>
                        <input type="Radio" id="G" name="tamanhoCamisa" value="G">
                        <br>
                    </div>
    
                    <div id="EscolhaNumero">
                        <h4>Você deseja personalizar o número na camisa?</h4>
                        <label for="EscolhaNumeroS">Sim</label>
                        <input type="Radio" id="EscolhaNumeroS" name="EscolhaNumero" value="EscolhaNumeroS">
                        <label for="EscolhaNumeroN">Não</label>
                        <input type="Radio" id="EscolhaNumeroN" name="EscolhaNumero" value="EscolhaNumeroN">
                        <br>
                        <input type="text">
                    </div>
    
                    <div id="EscolhaNome">
                        <h4>Você deseja personalizar nome na camisa?</h4>
                        <label for="EscolhaNomeS">Sim</label>
                        <input type="Radio" id="EscolhaNomeS" name="EscolhaNome" value="EscolhaNomeS">
                        <label for="EscolhaNomeN">Não</label>
                        <input type="Radio" id="EscolhaNomeN" name="EscolhaNome" value="EscolhaNomeN">
                        <br>
                        <input type="text">
                        </div>
                      
                    <div id="Preço" >
                        <h2><strong>Preço: R$ ${prod.preco.toFixed(2)}</strong></h2>
                        <p>Ou em 10x de R$ ${prod.parcela.toFixed(2)} sem juros.</p>
                    </div>
    
                    <div id="DivButao">
                        <button id="ButaoAddCarrinho">
                            <div>Colocar no Carrinho</div> 
                        </button>
                    </div>
                </div>
               
            </div>
            <div id="DivDescricaoCamisa">
                <div id="ProdAvaliacao">
                    <h2>Avaliação</h2>
                    <p>4.5/5</p>
                </div>
                <div id="ProdDescricao">
                    <h2>Descrição:</h2>
                    <p> ${prod.descricao}</p> 
                     
                </div>
                <div>
                    <div id="ProdDimensão">
                        <h2>Dimensões aproximadas(A x L):</h2>
                            <ul style="margin-left: 3%;" >
                                <li> P: 71 x 52 cm </li>
                                <li> M: 73 x 54 cm </li>
                                <li> G: 74 x 57 cm </li>
                            </ul>
                    </div>    
                </div>    
            </div>`

        )
    }
    else {
        return;
    }
}
).join();