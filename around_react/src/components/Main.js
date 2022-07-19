function Main() {
  function handleEditAvatarClick() {
    document.querySelector('.popup_edit-pic').classList.add('popup_opened')
  }
  function handleEditProfileClick() {
    document.querySelector('.popup_profile').classList.add('popup_opened')

  }
  function handleAddPlaceClick() {
    document.querySelector('.popup_new-image').classList.add('popup_opened')

  }
  return (
    <main class="content">
      <section class="profile">
        <div class="profile__pic" onClick={handleEditAvatarClick}></div>
        <div class="profile__info">
          <h1 class="profile__name" id="name">
            Jacques Cousteau
          </h1>
          <button class="profile__edit" onClick={handleEditProfileClick} type="button"></button>
          <p class="profile__subtitle" id="about">
            Explorer
          </p>
        </div>
        <button class="profile__add" onClick={handleAddPlaceClick} type="button"></button>
      </section>

      <section class="photos">
        <ul class="photos__list"></ul>
      </section>

      <div class="popup popup_profile">
        <form class="popup__form" novalidate>
          <button
            class="popup__close popup__close_profile"
            type="button"
          ></button>
          <h2 class="popup__title">Edit profile</h2>
          <div class="popup__inputs">
            <label class="popup__label" for="name">
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
            <span class="profileAbout-input-error"></span>
          </div>
          <button type="submit" class="popup__save popup__save_profile">
            Save
          </button>
        </form>
      </div>

      <div class="popup popup_new-image">
        <form class="popup__form reset" novalidate>
          <button
            class="popup__close popup__close_image"
            type="button"
          ></button>
          <h2 class="popup__title">New place</h2>
          <div class="popup__inputs">
            <label class="popup__label" for="title">
              Type here the photo title
            </label>
            <input
              id="imageName"
              class="popup__input popup__input_title"
              type="text"
              placeholder="Title"
              required
              minlength="1"
              maxlength="30"
            />
            <span class="imageName-input-error"></span>
            <label class="popup__label" for="link">
              Type here the photo URL
            </label>
            <input
              id="link"
              class="popup__input popup__input_url"
              type="url"
              placeholder="Image URL"
              required
            />
            <span class="link-input-error"></span>
          </div>
          <button type="submit" class="popup__save popup__save_image">
            Create
          </button>
        </form>
      </div>

      <div class="popup popup_delete">
        <form class="popup__form popup__form_delete reset" novalidate>
          <button
            class="popup__close popup__close_image"
            type="button"
          ></button>
          <h2 class="popup__title">Are you sure?</h2>
          <button type="submit" class="popup__save popup__save_image">
            Yes
          </button>
        </form>
      </div>

      <div class="popup popup_edit-pic">
        <form class="popup__form popup__form_edit-pic reset" novalidate>
          <button
            class="popup__close popup__close_image"
            type="button"
          ></button>
          <h2 class="popup__title">Change profile picture</h2>
          <div class="popup__inputs">
            <input
              id="editLink"
              class="popup__input popup__input_url popup__input_edit-pic"
              type="url"
              placeholder="Image URL"
              required
            />
            <span class="editLink-input-error"></span>
          </div>
          <button type="submit" class="popup__save popup__save_image">
            Save
          </button>
        </form>
      </div>
    </main>
  );
}

export default Main;
