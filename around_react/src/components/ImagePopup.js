function ImagePopup() {
  return (
    <div class="popup popup_image-popup">
      <div class="popup__element popup__element_image-popup">
        <button
          class="popup__close popup__close_image-popup"
          type="button"
        ></button>
        <img
          class="popup__img popup__img_image-popup"
          src="#"
          alt="inlarged picture"
        />
        <p class="popup__title popup__title_image-popup"></p>
      </div>
    </div>
  )
}

export default ImagePopup;
