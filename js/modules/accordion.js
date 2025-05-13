// Acordion list faq

export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  toogleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona o evento ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toogleAccordion(item));
    });
  }

  // Iniciar função
  init() {
    if (this.accordionList.length) {
      // Ativar o primeiro item
      this.toogleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
