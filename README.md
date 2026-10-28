# 19 motivos pelos quais eu escolheria você ❤️

Site romântico responsivo feito com HTML, CSS e JavaScript puro.

## Como executar
1. Extraia a pasta `19-motivos`.
2. Abra a pasta no Visual Studio Code.
3. Abra `index.html` no navegador. Você também pode instalar a extensão **Live Server** no VS Code e clicar em **Go Live**.
4. Para testar a música, coloque seu arquivo MP3 em `audio/nossa-musica.mp3`.

## Como personalizar
Abra `script.js` e edite:
- `PERSONALIZACAO.nomeDela`: nome ou apelido da sua namorada.
- `PERSONALIZACAO.dataAniversario`: data opcional.
- `PERSONALIZACAO.cartaFinal`: texto da carta final.
- `PERSONALIZACAO.fraseFinal`: frase exibida no encerramento.
- `PERSONALIZACAO.fotoFinal`: caminho para a foto especial.
- `MOTIVOS`: lista dos 18 motivos que desbloqueiam a carta final. Cada item tem `titulo`, `mensagem`, `foto` e `legenda`.

As mensagens incluídas são exemplos genéricos. Substitua-as por lembranças e sentimentos reais de vocês.

## Como adicionar fotografias
1. Coloque suas imagens dentro da pasta `images`.
2. Use nomes simples, sem espaços ou acentos, por exemplo `foto-especial.jpg` ou `memoria-01.jpg`.
3. Para a carta final, altere `fotoFinal: "images/foto-especial.jpg"`.
4. Para um motivo específico, edite o item correspondente em `MOTIVOS` e informe, por exemplo:
   `foto: "images/memoria-01.jpg", legenda: "Um dia que guardo com carinho."`
5. Se não quiser foto em algum motivo, deixe `foto: ""`.

## Como adicionar a música
Coloque um arquivo de áudio que você tenha direito de usar em `audio/nossa-musica.mp3`. O botão de música só tenta tocar depois de um clique, pois navegadores bloqueiam reprodução automática.

## Como publicar gratuitamente com GitHub Pages
1. Crie um repositório no GitHub, por exemplo `19-motivos`.
2. Envie todos os arquivos e pastas do projeto (incluindo `index.html`, `style.css`, `script.js`, `images` e `audio`).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)` e salve.
6. Aguarde a publicação. O GitHub mostrará o endereço público do site na seção Pages.

### Privacidade
O site não envia mensagens ou fotografias a um servidor e não precisa de banco de dados. Porém, qualquer arquivo que você publicar no GitHub Pages ficará acessível a quem tiver o endereço e poderá ser compartilhado. Não publique fotos ou informações íntimas sem consentimento.
