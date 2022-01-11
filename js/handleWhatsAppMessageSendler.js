document.querySelector("#formDeContato").addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailContainer").value;
  const message = document.querySelector("#messageContainer").value;
  const name = document.querySelector("#nomeContainer").value;

  const number = '5515988370569';
  const address = 'https://wa.me';

  const uriToSend = `${address}/${number}?text=Olá, meu nome é ${name} e meu e-mail é ${email}. Estou entrando em contato através do site do Hello Yotta.\n Essa é a minha mensagem: ${message}`;

  location.href = uriToSend;
});
