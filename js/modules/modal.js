export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToogleModal = this.eventToogleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // Adiciona o evento de toogle ao modal
  eventToogleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  // Fecha o modal ao clicar fora dele
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elemntos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToogleModal);
    this.botaoFechar.addEventListener("click", this.eventToogleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
