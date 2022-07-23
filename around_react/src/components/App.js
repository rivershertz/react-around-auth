import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import "../index.css";
import { useState } from "react";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  // click popup handlers
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    console.log("avatar is clicked");
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
    console.log("profile is clicked");
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    console.log("image is clicked");
  }
  function handleDeletePlaceClick() {
    setIsConfirmDeleteOpen(true);
    console.log("delete is clicked");
  }
  function handleCardClick(card) {
    console.log('image is clicked')
    setIsImagePopupOpen(true)
    setSelectedCard({name: card.name, link: card.link});
    console.log(isImagePopupOpen)
  }

  // close popup handler
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteOpen(false);
    setIsImagePopupOpen(false)
  }
  return (
    <body class="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onDeleteCardClick={handleDeletePlaceClick}
        onCardClick={handleCardClick}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen}/>
      <PopupWithForm
        name="profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        name="new-image"
        title="New place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
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

      <PopupWithForm
        name="delete"
        title="Are you sure?"
        isOpen={isConfirmDeleteOpen}
      ></PopupWithForm>

      <PopupWithForm
        name="edit-pic"
        title="Change profile picture"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="editLink"
          className={`popup__input popup__input_url popup__input_edit-pic`}
          type="url"
          placeholder="Image URL"
          required
        />
        <span className="editLink-input-error"></span>
      </PopupWithForm>

      <Footer />
    </body>
  );
}

export default App;
