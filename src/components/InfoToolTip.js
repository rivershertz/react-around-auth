function InfoToolTip({ onClose, isSuccessful, isOpen }) {
  return (
    <div className={`popup tool-tip ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__form'>
        <button
          className={`popup__close `}
          type='button'
          onClick={onClose}
        ></button>
        <div
          className={`tool-tip__img
          ${isSuccessful ? 'tool-tip__img_success' : 'tool-tip__img_fail'}`}
        ></div>
        <p className='tool-tip__caption'>
          {isSuccessful
            ? 'Success! You have now been registered'
            : 'Oops, something went wrong! Please try again'}
        </p>
      </div>
    </div>
  );
}

export default InfoToolTip;
