// ===== CONFIGURAÇÕES (edite só aqui) =====
const CONFIG = {
  whatsapp: "https://wa.me/5541997163914",
  instagram: "", // ex.: "https://instagram.com/seuperfil"
  facebook: ""   // ex.: "https://facebook.com/suapagina"
};

// Todos os botões de WhatsApp usam o link acima
document.querySelectorAll("[data-whatsapp]").forEach(function (a) {
  a.href = CONFIG.whatsapp;
  a.target = "_blank";
  a.rel = "noopener";
});

// Redes sociais: só aparecem quando você preencher o link
document.querySelectorAll("[data-social]").forEach(function (a) {
  var url = CONFIG[a.dataset.social];
  if (url) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.hidden = true;
  }
});

// Destaca no menu a seção que está na tela
var links = document.querySelectorAll("nav a");
var secoes = Array.prototype.map.call(links, function (l) {
  return document.querySelector(l.getAttribute("href"));
});
function marcarMenu() {
  var pos = window.scrollY + 120, atual = 0;
  secoes.forEach(function (s, i) { if (s && s.offsetTop <= pos) atual = i; });
  links.forEach(function (l, i) { l.classList.toggle("ativo", i === atual); });
  document.querySelector("header").classList.toggle("rolou", window.scrollY > 10);
}
window.addEventListener("scroll", marcarMenu, { passive: true });
marcarMenu();
