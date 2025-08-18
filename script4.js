document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupModal");
  const closeBtn = popup.querySelector(".popup-close");
  const form = document.getElementById("popupForm");

  // Mostrar popup ao abrir página (0.8s)
  setTimeout(() => {
    popup.classList.add("active");
  }, 800);

  // Fechar ao clicar no botão X
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
  });

  // Fechar ao clicar fora do conteúdo
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });

  // Envio do formulário -> WhatsApp
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const modalidade = document.getElementById("modalidade").value;
    if (!modalidade) return;

    // número do WhatsApp (coloque o seu aqui!)
    const phoneNumber = "5591981363221";
    const message = `Olá! Quero agendar minha aula experimental de ${modalidade}.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
