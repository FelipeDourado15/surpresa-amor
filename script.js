function abrirEnvelope() {
  const envelope = document.querySelector('.envelope');
  const cartaConteudo = document.querySelector('.mensagem');
  const musica = document.getElementById("musica");

  const tl = gsap.timeline();

  tl.to(envelope, { duration: 0.2, y: -10, ease: "power1.out" })
    .to(envelope, { duration: 0.2, y: 10, ease: "power1.out" })
    .to(envelope, { duration: 0.2, y: -5, ease: "power1.out" })
    .to(envelope, { duration: 0.2, y: 5, ease: "power1.out" });

  const pieces = [];
  for (let i = 0; i < 8; i++) {
    const piece = document.createElement('div');
    piece.classList.add('envelope-piece');
    piece.style.position = 'absolute';
    piece.style.backgroundColor = '#ffffff';
    piece.style.width = '20px';
    piece.style.height = '20px';
    envelope.appendChild(piece);
    pieces.push(piece);
  }

  tl.to(pieces, { duration: 0.3, stagger: 0.05, scale: 2, opacity: 0, x: (i) => (Math.random() - 0.5) * 200, y: (i) => (Math.random() - 0.5) * 200, ease: "power2.out" }, 0)
    .to(envelope, { duration: 0.3, opacity: 0, ease: "power1.in" }, 0)
    .to(cartaConteudo, { duration: 0.5, opacity: 1, display: "block", ease: "power1.out" }, 0.3)
    .call(tocarMusica);

  function tocarMusica() {
    musica.play().catch(error => {
      console.error("Erro ao reproduzir a música:", error);
    });
  }

  gerarChuvaDeCoracoes();

  function gerarChuvaDeCoracoes() {
    const quantidade = 20;
    for (let i = 0; i < quantidade; i++) {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = Math.random() * 5 + 5 + 's';
      heart.style.animationDelay = Math.random() * 5 + 's';
      document.body.appendChild(heart);
    }
  }

  const targetDate = new Date('2023-02-04'); // Data de referência
  const countdownElement = document.getElementById('countdown');

  updateCountdown();
  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const now = new Date();
    const diff = now - targetDate; // Diferença em milissegundos

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;

    countdownElement.innerHTML = `Te amando à ${days} dias, ${remainingHours} horas, ${remainingMinutes} minutos e ${remainingSeconds} segundos...`;
  }
}