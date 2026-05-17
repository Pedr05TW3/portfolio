$(document).ready(function(){
	$('.input-group-append1').click(function(){
		$('.action_menu').toggle();
	});
});

$(document).ready(function(){
	$('#esqueci-senha').click(function(e){
		e.preventDefault();
		$('#esqueci-menu').toggle();
	});
});
function enviado(){
	 const mensagemLi = document.getElementById('mensagem-enviada');
    mensagemLi.textContent = "Email enviado com sucesso!";
}