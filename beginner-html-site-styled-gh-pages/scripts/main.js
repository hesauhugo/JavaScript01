
let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'images/firefox-icon.png') {
      minhaImagem.setAttribute('src','images/firefox2.png');
    } else {
      minhaImagem.setAttribute('src','images/firefox-icon.png');
    }
}