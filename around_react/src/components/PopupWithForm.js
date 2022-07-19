function PopupWithForm(props) {
  return (
    <div className = {`popup popup_${props.name}`}>
      <form class="popup__form" name = {props.name} novalidate>
        <button
          class="popup__close popup__close_profile"
          type="button"
        ></button>
        <h2 class="popup__title">{props.title}</h2>
        <div class="popup__inputs">
            {/* children */}

            
          {/* <label class="popup__label" for="name">
            Type here your name
          </label>
          <input
            id="profileName"
            class="popup__input popup__name"
            type="text"
            placeholder="Name"
            required
            minlength="2"
            maxlength="40"
          />
          <span class="profileName-input-error"></span>
          <label class="popup__label" for="about">
            Type here about yourself
          </label>
          <input
            id="profileAbout"
            class="popup__input popup__about"
            type="text"
            placeholder="About me"
            required
            minlength="2"
            maxlength="200"
          />
          <span class="profileAbout-input-error"></span> */}
        </div>
        <button type="submit" class="popup__save popup__save_profile">
          Save
        </button>
      </form>
    </div>
  );
}

export default PopupWithForm;
