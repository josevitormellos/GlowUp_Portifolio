function CriarFormulario() {
    const form = document.getElementById("root");
   /*const status = document.getElementById("statusroot");*/
    if (form.innerHTML == ``) {
        /*status.innerHTML = 
        `<div>   
        <h1>Contato</h1>
        </div>
        <div>
            <p>Preencha o formulário de contato.</p>
            <p>Se preferir, use um dos canais indicados abaixo.</p>
            <p>Será um prazer falar com você!</p>
        </div>
        <div>
        <p><b>Telefone:</b> (21) 99894-3822</p>
        <p><b>Email:</b> nataliamello@hotmail.com</p>
        </div>`;*/
    form.innerHTML =
        `  
            <input type="text" id="nome" name="nome" required placeholder="Nome">
            <input type="text" id="email" name="email" required placeholder="Email">
            <input type="text" id="empresa" name="empresa" required placeholder="Empresa">
            <input type="text" id="cell" name="cell" required placeholder="Telefone com DDD">
            <textarea cols="30" rows="5" placeholder="Escreva sua mensagem aqui..."></textarea>
            <button type="submit">Enviar</button>`;
    }
    else {
        /*status.innerHTML = ``;*/
        form.innerHTML = ``;
    }
    
}

function EnviarEmail() {
    var nome = document.getElementById('nome').value;
	var telefone = document.getElementById('cell').value;

	var email = document.getElementById('email').value;

	var corpoEmail = 'Nome: ' + nome + '%0D%0A';
	corpoEmail += 'Telefone: ' + telefone + '%0D%0A';
    corpoEmail += 'E-mail: ' + email + '%0D%0A';
    corpoEmail += 'Desejo entrar em contato com você para mais informações dos serviços';

	var linkEmail = 'mailto:contato.glowupfinanceiro@gmail.com';
	linkEmail += '?subject=Contato pelo Formulário do GlowUP';
	linkEmail += '&body=' + corpoEmail;



	window.location.href = linkEmail;
}