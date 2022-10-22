var index = 1;

function getBotResponse(step, input, question) {

    sendMessage(input.innerHTML);

    //  ESCONDER RESPOSTAS DA ETAPA
    document.getElementById("step-" + index).style.display = 'none';
    $("#step-" + index).find("div").css("display", 'none');
    

    //  PRÓXIMA ETAPA
    index++;

    //  BOT ENVIA MENSAGEM
    setTimeout(function() {
        botSendMessage(question);

        //  MOSTRA PRÓXIMAS REPOSTAS
        if(document.getElementById("step-" + index) != null )
            document.getElementById("step-" + index).style.display = 'block';

        if(document.getElementById(step) != null )
            document.getElementById(step).style.display = 'block';

        document.getElementsByClassName("full-chat-block")[0].scroll(0, 9999999999999999999999);
    }, 1000)

}

//  USUARIO ENVIA MENSAGEM
function sendMessage(message) {
    if(message != null) {
        document.getElementById("botStarterMessage").innerHTML += '<p class="botText mine"><span>' + message + '</span></p>';;
    }
}

//  BOT ENVIA MENSAGEM
function botSendMessage(message) {
    if(message != null)
        document.getElementById("botStarterMessage").innerHTML += '<p class="botText"><span>' + message + '</span></p>';
}

function resetBot() {
    sendMessage("Não, voltar do inicio");

    //  ESCONDER RESPOSTAS DA ETAPA
    document.getElementById("step-" + index).style.display = 'none';
    document.getElementById("finish").style.display = 'none';

    index = 1;

    setTimeout(function() {
        botSendMessage('Como posso te ajudar?');

        //  MOSTRA PRÓXIMAS REPOSTAS
        if(document.getElementById("step-" + index) != null )
            document.getElementById("step-" + index).style.display = 'block';

        document.getElementsByClassName("full-chat-block")[0].scroll(0, 9999999999999999999999);
    }, 1000)
}