document.querySelector("#formDeContato").addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailContainer").value;
  const message = document.querySelector("#messageContainer").value;
  const number = '5515998317100';
  const address = 'https://wa.me';

  const uriToSend = `${address}/${number}?text=Olá, meu e-mail é ${email}, estou entrando em contato através do site do Hello Yotta.\n Essa é a minha mensagem: ${message}`;

  location.href = uriToSend;
});