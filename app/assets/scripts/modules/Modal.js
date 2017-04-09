import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.escapeModal = $(".modal__close");
    this.events();
  }

  events() {
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModel.bind(this));
    $(document).keyup(this.escapeModel.bind(this));
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;
  }

  closeModel() {
    this.modal.removeClass("modal--is-visible");
  }

  escapeModel(e) {
    if(e.keyCode === 27){
      this.closeModel();
    }
  }
}

export default Modal;
