function CriarFormulario(titulo) {
    const form = document.getElementById("formMensagem");
    const title = document.getElementById("titleFormulario");
    form.style.visibility = "visible";
    const forms = document.getElementById("formObrigatorio");
    const feito = document.getElementById('posFeito');
    forms.style.display="flex";
    feito.style.display = "none";
    title.innerHTML = titulo;
}

function FecharFormulario(){
    const form = document.getElementById("formMensagem");
    form.style.visibility = "hidden";
}

function EnviarEmail() {
    const feito = document.getElementById('posFeito');
   
    const form = document.getElementById("formObrigatorio");
	
    
    form.style.display="none";
    feito.style.display= "flex";
	
}

function Sobremin(){
    var nome = document.getElementById('nome');
}
function openInNewTab(url){
    var win = window.open(url, '_blank');
  win.focus();
}