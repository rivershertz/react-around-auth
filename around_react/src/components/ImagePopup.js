function ImagePopup({card, onClose, isOpen}) {
  return (
    <div className={`popup popup_image-popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__element popup__element_image-popup">
        <button
          className="popup__close popup__close_image-popup"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="popup__img popup__img_image-popup"
          src={card.link}
          alt="inlarged picture"
        />
        <p className="popup__title popup__title_image-popup">{card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;
