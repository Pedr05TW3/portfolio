# challenge-amigo-secreto
Desafio do amigo secreto desenvolvido ao final da formação "iniciante em programação"

O projeto "Challenge amigo secreto" foi desenvolvido por mim para a finalização da formação "iniciante em programação" da Alura. O jogo consiste em uma aplicação em que o usuário digita nomes em um espaço indicado no site, assim montando uma lista de amigos. Após todos os amigos serem adicionados à lista, um sorteio será realizado.

Para começar, digite o nome de um dos amigos a ser sorteado. Após isso, pressione o botão "adicionar", assim deve aparecer o nome digitado abaixo:
![pedro-adicionado-a-lista](https://github.com/user-attachments/assets/826991a6-f22f-44cb-96ef-5377513c5d43)

Caso o usuário deixe o campo em branco e pressione o botão "adicionar", essa mensagem irá aparecer, indicando que o usuário deve digitar um nome válido para o sorteio.
![nome-invalido](https://github.com/user-attachments/assets/bd7367ee-13a9-4f8e-83b2-afb927187e00)

Se o usuário pressionar o botão "sortear amigo" antes de ter adicionado o mínimo de 3 amigos, a seguinte mensagem de erro aparecerá:
![nao-e-possivel-sortear](https://github.com/user-attachments/assets/7355bdba-d2fb-47ef-9e99-a7016ced6bbd)

Após o usuário ter adicionado ao menos 3 nomes, basta pressionar o botão "sortear amigo"
![tres-nomes-para-sorteio](https://github.com/user-attachments/assets/2850ba53-4b99-4c5d-9781-a10ae60df4dd)

A máquina executará um código que irá gerar um número aleatório. Com base nesse número, o sorteado será determinado:
![amigo-sorteado](https://github.com/user-attachments/assets/0f6e5d08-19a9-4f42-8d10-766f3ba0569b)
Após cada sorteio, a máquina reinicia a aplicação, retornando ao seu estado inicial e permitindo novamente o preenchimento da lista com outros nomes.

Caso o usuário tente pressionar o botão "sortear amigo" antes de adicionar algum nome à lista, será gerada uma mensagem de erro:
![digite-um-nome-antes](https://github.com/user-attachments/assets/ec225f8d-6f6e-40ff-8891-abe9f1b51b95)
