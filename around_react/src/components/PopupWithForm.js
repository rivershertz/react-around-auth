function PopupWithForm({
    children,
    name,
    title,
    isOpen,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form class="popup__form" name={name} novalidate>
        <button
          className={`popup__close popup__close_${name}`}
          type="button"
        ></button>
        <h2 className="popup__title">{title}</h2>
        <div className="popup__inputs">
            {children}
        </div>
        <button
          type="submit"
          className={`popup__save popup__save_${name}`}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
