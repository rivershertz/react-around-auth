function PopupWithForm({
    children,
    name,
    title,
    isOpen,
    onClose,
    buttonText,
    onSubmit
}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form" name={name} onSubmit={onSubmit} noValidate>
        <button
          className={`popup__close popup__close_${name}`}
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <div className="popup__inputs">
            {children}
        </div>
        <button
          type="submit"
          className={`popup__save popup__save_${name}`}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
