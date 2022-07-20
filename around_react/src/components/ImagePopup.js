function ImagePopup(props) {
  return (
    <div className="popup popup_image-popup">
      <div className="popup__element popup__element_image-popup">
        <button
          className="popup__close popup__close_image-popup"
          type="button"
        ></button>
        <img
          className="popup__img popup__img_image-popup"
          src="#"
          alt="inlarged picture"
        onClick={props.onCardClick}
        />
        <p className="popup__title popup__title_image-popup"></p>
      </div>
    </div>
  )
}

export default ImagePopup;
