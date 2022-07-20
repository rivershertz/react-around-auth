import PopupWithForm from "./PopupWithForm";

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  isOpen
}) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__pic" onClick={onEditAvatarClick}></div>
        <div className="profile__info">
          <h1 className="profile__name" id="name">
            Jacques Cousteau
          </h1>
          <button
            className="profile__edit"
            onClick={onEditProfileClick}
            type="button"
          ></button>
          <p className="profile__subtitle" id="about">
            Explorer
          </p>
        </div>
        <button
          className="profile__add"
          onClick={onAddPlaceClick}
          type="button"
        ></button>
      </section>

      <section className="photos">
        <ul className="photos__list"></ul>
      </section>

      <PopupWithForm name="profile" title="Edit profile" isOpen={isOpen}>
        <label className="popup__label" for="name">
          Type here your name
        </label>
        <input
          id="profileName"
          className="popup__input popup__name"
          type="text"
          placeholder="Name"
          required
          minlength="2"
          maxlength="40"
        />
        <span className="profileName-input-error"></span>
        <label className="popup__label" for="about">
          Type here about yourself
        </label>
        <input
          id="profileAbout"
          className="popup__input popup__about"
          type="text"
          placeholder="About me"
          required
          minlength="2"
          maxlength="200"
        />
        <span className="profileAbout-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="new-image" title="New place" isOpen={isOpen}>
        <label className="popup__label" for="title">
          Type here the photo title
        </label>
        <input
          id="imageName"
          className="popup__input popup__input_title"
          type="text"
          placeholder="Title"
          required
          minlength="1"
          maxlength="30"
        />
        <span className="imageName-input-error"></span>
        <label className="popup__label" for="link">
          Type here the photo URL
        </label>
        <input
          id="link"
          className="popup__input popup__input_url"
          type="url"
          placeholder="Image URL"
          required
        />
        <span className="link-input-error"></span>
      </PopupWithForm>

      <div className="popup popup_delete">
        <form className="popup__form popup__form_delete reset" novalidate>
          <button
            className="popup__close popup__close_image"
            type="button"
          ></button>
          <h2 className="popup__title">Are you sure?</h2>
          <button type="submit" className="popup__save popup__save_image">
            Yes
          </button>
        </form>
      </div>

      <PopupWithForm name="edit-pic" title="Change profile picture" isOpen={isOpen}>
        <input
          id="editLink"
          className={`popup__input popup__input_url popup__input_edit-pic`}
          type="url"
          placeholder="Image URL"
          required
        />
        <span className="editLink-input-error"></span>
      </PopupWithForm>
      {/* <div className="popup popup_edit-pic">
        <form className="popup__form popup__form_edit-pic reset" novalidate>
          <button
            className="popup__close popup__close_image"
            type="button"
          ></button>
          <h2 className="popup__title">Change profile picture</h2>
          <div className="popup__inputs">
            
          </div>
          <button type="submit" className="popup__save popup__save_image">
            Save
          </button>
        </form>
      </div> */}
    </main>
  );
}

export default Main;
