

var botao = document.getElementById('submitemail');

botao.addEventListener('click', sendemail);

function sendemail() {
  const mensagem = document.getElementById("mensagem").value.trim();

  const destinatario = "pedroeusoudoscosta@gmail.com";
  const assunto = "Contato - Portfólio";
  const corpo = encodeURIComponent(mensagem);

  const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${corpo}`;

  window.location.href = mailtoLink;
}