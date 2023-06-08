//selecionar todas as perguntas
const questions = document.querySelectorAll('.item__header');

// percorrer cada uma das perguntas e adicionar um evento de clique
questions.forEach(question => {
    question.addEventListener('click', function () {

        // verificar se tem alguma pergunta aberta
        let openQuestion = document.querySelector('.item__header.active');

        // se existir alguma pergunta aberta 
      // e ela for diferente da atual então feche
        if (openQuestion && openQuestion !== this){
            setAnswer(openQuestion);
        }

        // abrir ou fechar a resposta
        setAnswer(question);

    });
});

function setAnswer(question) {

    // adicionar ou remover a classe active da pergunta
    question.classList.toggle('active');

    // recuperar a resposta
    let answer = question.nextElementSibling;

    // se a resposta estiver aberta então feche
    if (answer.style.maxHeight)
        answer.style.maxHeight = null;
    else
        answer.style.maxHeight = answer.scrollHeight + 'px';
}
