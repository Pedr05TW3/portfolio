 import 'charts.css';
 
document.querySelector('.botao-enviar').addEventListener('click', sendEmail);



function sendEmail() {
    const mailtoLink = `mailto:pedroeusoudoscosta@gmail.com?subject=Contato%20-%20Portf%C3%B3lio`;
    window.location.href = mailtoLink;
}