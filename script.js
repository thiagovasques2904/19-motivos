/* ==========================================================
   19 MOTIVOS — personalização e interações
   Edite primeiro as constantes PERSONALIZACAO e MOTIVOS.
   ========================================================== */

const PERSONALIZACAO = {
  nomeDela: "Giovanna Vasques", // Troque pelo nome ou apelido dela.
  idade: 19,
  dataAniversario: "29/10/2026", // Opcional: exemplo "26 de outubro".
  assinatura: "Eu te amei ontem, eu te amo hoje, e te amarei para todo sempre, minha princesa! De seu namorado e futuro marido, Thigas. ♡",
  fraseFinal: "Feliz 19 anos, meu amor. Que a vida te devolva toda a beleza que você espalha pelo mundo.",
  cartaFinal: `Feliz aniversário, Meu amor da minha vida!

Hoje começa um novo capítulo da sua vida, e eu espero que ele venha cheio de sonhos realizados, descobertas bonitas, coragem e motivos para sorrir.

Quero que você nunca se esqueça do quanto é especial. Admiro a pessoa que você é, a forma como enxerga o mundo e todas as pequenas coisas que fazem você ser única.

Se eu pudesse escolher de novo, entre todas as possibilidades e todos os caminhos, eu ainda escolheria conhecer você. Escolheria cada conversa, cada risada, cada abraço e cada lembrança que ainda vamos construir.

Que seus 19 anos sejam apenas o começo de uma fase maravilhosa. Quero estar ao seu lado para comemorar suas vitórias, apoiar seus sonhos e criar muitas histórias com você.

Obrigado por existir e por fazer parte da minha vida. Hoje celebramos você — e eu espero que você se sinta tão amada quanto merece.`,
  fotoFinal: "images/nossa-foto19.jpeg" // Se não existir, a imagem final fica oculta.
};

// Você pode adicionar o caminho de uma foto em "foto".
// Exemplo: foto: "images/memoria-01.jpg", legenda: "Um dia que guardo com carinho."
const MOTIVOS = [
  { titulo: "Seu jeito de ser", mensagem: "Eu escolheria você pelo conjunto de pequenos detalhes que fazem você ser exatamente quem é. Não existe outra pessoa igual a você.", foto: "images/nossa-foto1.jpeg", legenda: "'Cause all of me, loves, all of you' " },
  { titulo: "O seu sorriso", mensagem: "Seu sorriso tem um jeito especial de deixar os momentos mais leves. É uma daquelas coisas simples que podem melhorar meu dia.", foto: "images/nossa-foto2.jpeg", legenda: "'Your love is my turning page'" },
  { titulo: "A sua risada", mensagem: "Eu amo quando você ri de verdade, especialmente daqueles momentos bobos que acabam virando lembranças favoritas.", foto: "images/nossa-foto3.jpeg", legenda: "'E se o mundo acabar num segundo, eu quero estar, te amando'" },
  { titulo: "A sua companhia", mensagem: "Com você, até os momentos mais comuns podem se tornar especiais. Nem sempre precisamos fazer algo extraordinário para eu gostar de estar ao seu lado.", foto: "images/nossa-foto4.jpeg", legenda: "'Antes de desistir do amor, tenta o meu por favor'" },
  { titulo: "A pessoa que você é", mensagem: "Admiro as suas qualidades, o seu jeito de pensar e a pessoa que você continua se tornando. Espero que você também consiga enxergar tudo isso em si mesma.", foto: "images/nossa-foto5.jpeg", legenda: "'Conheci o amor, só de te olhar, tava quase congelando, você veio pra esquentar'" },
  { titulo: "As nossas conversas", mensagem: "Gosto das nossas conversas, das brincadeiras e dos momentos em que podemos simplesmente ser nós mesmos.", foto: "images/nossa-foto6.jpeg", legenda: "'I see my future in your eyes'" },
  { titulo: "Os pequenos detalhes", mensagem: "Às vezes, são os detalhes mais simples que fazem alguém ser inesquecível. Existem muitas coisinhas em você que eu guardo com carinho.", foto: "images/nossa-foto7.jpeg", legenda: "'Que preenche a vida vazia, mande embora a agonia, e que traga paz pro coração. É você, é você'" },
  { titulo: "O carinho que você me dá", mensagem: "Os gestos de carinho, mesmo os mais discretos, têm um valor enorme para mim. Eles me lembram como é bom dividir a vida com alguém especial.", foto: "images/nossa-foto8.jpeg", legenda: "Véu e grinalda, lua de mel, Chuva de arroz e tudo depois, Dama de honra pega o buque, ninguém mais feliz que eu e você'" },
  { titulo: "A sua força", mensagem: "Admiro a força que existe em você, inclusive nos dias em que talvez você mesma não perceba o quanto é capaz.", foto: "images/nossa-foto9.jpeg", legenda: "'I'm an Astronaut, you're the moon, i stare at you, i sing to you, i circle you'" },
  { titulo: "O seu coração", mensagem: "Gosto da forma como você demonstra quem é e da maneira única como deixa a sua marca nas pessoas e nos momentos.", foto: "images/nossa-foto10.jpeg", legenda: "'Se eu sou, quem eu sou, é porque você chegou e arrumou, a bagunça, o caos, MEU MILAGRE MAIS REAL'" },
  { titulo: "As nossas lembranças", mensagem: "Cada lembrança que construímos tem um lugar especial na minha história. Quero continuar criando muitas outras com você.", foto: "images/nossa-foto11.jpeg", legenda: "'Darling, don't be afraid, i have loved you for a thousand years, i'll love you for a thousand more'" },
  { titulo: "O que aprendo com você", mensagem: "Estar com você também é uma oportunidade de aprender, amadurecer e descobrir novas formas de enxergar as coisas.", foto: "images/nossa-foto12.jpeg", legenda: "'So you can keep me, inside the pocket of your ripped jeans, holdin'me closer 'til our eyes meet, you won't ever be alone, wait for me to come home'" },
  { titulo: "A sua individualidade", mensagem: "Eu amo que você tenha seus próprios gostos, sonhos, opiniões e maneiras de ver o mundo. Quero continuar conhecendo cada nova versão de você.", foto: "images/nossa-foto13.jpeg", legenda: "'When i see your face, there's not a thing that i would change, 'Cause you're amazing, JUST THE WAY YOU ARE'" },
  { titulo: "Os momentos simples", mensagem: "Não preciso de uma ocasião perfeita para gostar de estar com você. Muitas vezes, os momentos mais simples são os que ficam guardados por mais tempo.", foto: "images/nossa-foto14.jpeg", legenda: "'Eu quero tu na minha boca, e a minha boca quer você, quer você...'" },
  { titulo: "Os sonhos que você tem", mensagem: "Quero ver você conquistando aquilo que deseja, descobrindo novos caminhos e se orgulhando da pessoa que está se tornando.", foto: "images/nossa-foto15.jpeg", legenda: "'Can we always be this close forever and ever? And ah, take me out, and take me home, You're my,my,my,my, LOVER'" },
  { titulo: "A nossa parceria", mensagem: "Gosto da ideia de sermos duas pessoas que podem compartilhar alegrias, conversar com sinceridade e aprender juntas ao longo do caminho.", foto: "images/nossa-foto16.JPG", legenda: "'Paz e amor, é o que eu quero pra nós, e que nada nesse mundo cale a nossa voz, Céu e mar e alguém para amar, e o arrepio toda vez que a gente se encontrar, e nunca vai passar, mesmo quando o sol chegar'" },
  { titulo: "O jeito como me sinto", mensagem: "Você ocupa um lugar especial na minha vida. Sou grato pelos sentimentos bons e pelas experiências que compartilhamos.", foto: "images/nossa-foto17.JPG", legenda: "'Take a piece of my heart, and make it all your own, so when we are apart, You'll never be alone, You'll never be alone'" },
  { titulo: "Tudo o que ainda vem", mensagem: "Ainda existem lugares para conhecer, fotos para tirar, histórias para contar e muitos dias que nem imaginamos. Tenho carinho por tudo o que ainda podemos viver.", foto: "images/nossa-foto18.jpg", legenda: "'Before you, I was just a flare in the sky, A kid too afraid to go to play in the light, A colorless painter, a man with no sight, Before you, I was nothin', was nothin', Had nothin', I only had A kiss, a touch, a song that made me cry, And all the drugs I've done, they never got me higher Than the first time we met, There's nothing like the first time we met, I crashed my car, oh, baby, I was flyin', And I talked to God, He couldn't get me higher Than the first time we met, There's nothing like the first time, the first time we met...'" }
];

const $ = (selector) => document.querySelector(selector);
const hero = $("#hero");
const memoriesSection = $("#memories");
const closingNote = $("#closing-note");
const heartGrid = $("#heart-grid");
const reasonDialog = $("#reason-dialog");
const letterDialog = $("#letter-dialog");
const openedReasons = new Set();
const music = $("#background-music");
let musicPlaying = false;

function personalizePage() {
  $("#birthday-kicker").textContent = `Feliz aniversário, ${PERSONALIZACAO.nomeDela}`;
  $("#letter-signoff").textContent = PERSONALIZACAO.fraseFinal || PERSONALIZACAO.assinatura;
  $("#letter-copy").textContent = PERSONALIZACAO.cartaFinal;
  document.title = `19 motivos para escolher ${PERSONALIZACAO.nomeDela} ❤️`;

  const photoPath = PERSONALIZACAO.fotoFinal;
  if (photoPath) {
    const image = $("#letter-photo");
    image.src = photoPath;
    image.addEventListener("error", () => { $("#letter-photo-wrap").hidden = true; }, { once: true });
    image.addEventListener("load", () => { $("#letter-photo-wrap").hidden = false; }, { once: true });
  }
}

function createHearts() {
  heartGrid.innerHTML = "";
  MOTIVOS.forEach((motivo, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "heart-card";
    button.dataset.index = String(index);
    button.setAttribute("aria-label", `Abrir motivo ${index + 1}: ${motivo.titulo}`);
    button.innerHTML = `<span class="heart-symbol" aria-hidden="true">♥</span><span class="heart-number">${String(index + 1).padStart(2, "0")}</span>`;
    button.addEventListener("click", () => openReason(index));
    heartGrid.appendChild(button);
  });

  const finalButton = document.createElement("button");
  finalButton.type = "button";
  finalButton.className = "heart-card is-final locked";
  finalButton.id = "final-heart";
  finalButton.innerHTML = `<span class="heart-symbol" aria-hidden="true">♡</span><span class="heart-number">19 · SURPRESA</span>`;
  finalButton.setAttribute("aria-label", "Motivo 19, bloqueado até descobrir os outros 18");
  finalButton.addEventListener("click", openFinalLetter);
  heartGrid.appendChild(finalButton);
}

function openReason(index) {
  const motivo = MOTIVOS[index];
  if (!motivo) return;

  $("#dialog-number").textContent = `MOTIVO ${String(index + 1).padStart(2, "0")}`;
  $("#dialog-title").textContent = motivo.titulo;
  $("#dialog-message").textContent = motivo.mensagem;

  const photoWrap = $("#dialog-photo-wrap");
  const photo = $("#dialog-photo");
  photoWrap.hidden = true;
  photo.removeAttribute("src");
  if (motivo.foto) {
    photo.src = motivo.foto;
    photo.alt = motivo.legenda || `Fotografia para o motivo ${index + 1}`;
    $("#dialog-photo-caption").textContent = motivo.legenda || "";
    photo.onload = () => { photoWrap.hidden = false; };
    photo.onerror = () => { photoWrap.hidden = true; };
  }

  openedReasons.add(index);
  const card = heartGrid.querySelector(`[data-index="${index}"]`);
  if (card) card.classList.add("is-opened");
  updateProgress();
  reasonDialog.showModal();
}

function updateProgress() {
  const total = MOTIVOS.length;
  const count = openedReasons.size;
  const percent = Math.round((count / total) * 100);
  $("#progress-text").textContent = `${count} de ${total} motivos descobertos`;
  $("#progress-percent").textContent = `${percent}%`;
  $("#progress-fill").style.width = `${percent}%`;

  const finalButton = $("#final-heart");
  const finalLock = $("#final-lock");
  const hint = $("#unlock-hint");
  if (count === total) {
    finalButton.classList.remove("locked");
    finalButton.classList.add("unlocked");
    finalButton.setAttribute("aria-label", "Abrir o motivo 19: a carta final");
    finalLock.innerHTML = `<span class="lock-icon" aria-hidden="true">✧</span><p>Você desbloqueou o motivo 19!</p><small>A última razão é uma carta escrita especialmente para você.</small>`;
    hint.textContent = "Todos os 18 motivos foram descobertos. A carta final está desbloqueada.";
  }
}

function openFinalLetter() {
  if (openedReasons.size < MOTIVOS.length) {
    $("#unlock-hint").textContent = `Ainda faltam ${MOTIVOS.length - openedReasons.size} motivos. Cada um guarda uma mensagem para você.`;
    $("#final-lock").animate([{ opacity: .65 }, { opacity: 1 }, { opacity: .65 }], { duration: 500 });
    return;
  }
  burstHearts();
  letterDialog.showModal();
}

function burstHearts() {
  const layer = $("#particle-layer");
  const symbols = ["♥", "♡", "✦", "✧"];
  for (let i = 0; i < 26; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.bottom = `${Math.random() * 20}%`;
    particle.style.fontSize = `${12 + Math.random() * 19}px`;
    particle.style.setProperty("--drift", `${Math.round(Math.random() * 180 - 90)}px`);
    particle.style.animationDuration = `${3 + Math.random() * 3}s`;
    layer.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  }
}

function createAmbientParticles() {
  const layer = $("#particle-layer");
  const symbols = ["♡", "✧", "·", "✦"];
  // Partículas decorativas discretas; respeita a preferência de movimento reduzido.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  setInterval(() => {
    if (document.hidden || layer.childElementCount > 28) return;
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.fontSize = `${10 + Math.random() * 14}px`;
    particle.style.setProperty("--drift", `${Math.round(Math.random() * 120 - 60)}px`);
    particle.style.animationDuration = `${8 + Math.random() * 9}s`;
    layer.appendChild(particle);
    particle.addEventListener("animationend", () => particle.remove(), { once: true });
  }, 650);
}

$("#start-button").addEventListener("click", () => {
  memoriesSection.hidden = false;
  memoriesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  $("#start-button").textContent = "Vamos descobrir ♡";
});
$("#dialog-close").addEventListener("click", () => reasonDialog.close());
$("#dialog-done").addEventListener("click", () => reasonDialog.close());
$("#letter-close").addEventListener("click", () => letterDialog.close());
$("#letter-finish").addEventListener("click", () => {
  letterDialog.close();
  closingNote.hidden = false;
  closingNote.scrollIntoView({ behavior: "smooth", block: "center" });
  burstHearts();
});
$("#back-to-hearts").addEventListener("click", () => memoriesSection.scrollIntoView({ behavior: "smooth", block: "start" }));

reasonDialog.addEventListener("click", (event) => {
  if (event.target === reasonDialog) reasonDialog.close();
});
letterDialog.addEventListener("click", (event) => {
  if (event.target === letterDialog) letterDialog.close();
});

$("#music-button").addEventListener("click", async () => {
  const button = $("#music-button");
  const label = $("#music-label");
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      button.setAttribute("aria-pressed", "true");
      label.textContent = "Pausar nossa música";
    } catch (error) {
      label.textContent = "Adicione nossa-musica.mp3";
      console.info("Adicione seu arquivo em audio/nossa-musica.mp3 para habilitar a música.");
    }
  } else {
    music.pause();
    musicPlaying = false;
    button.setAttribute("aria-pressed", "false");
    label.textContent = "Tocar nossa música";
  }
});

personalizePage();
createHearts();
updateProgress();
createAmbientParticles();
