import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import api from "../utils/api";
import { currentUserContext } from "../contexts/CurrentUserContext";
import "../index.css";
import { useEffect, useState } from "react";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });
  const [currentUser, setCurrentUser] = useState({});

  //fetch user info
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // click popup handlers
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleDeletePlaceClick() {
    setIsConfirmDeleteOpen(true);
  }
  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard({ name: card.name, link: card.link });
    console.log(isImagePopupOpen);
  }

  // close popup handler
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }
  return (
    <currentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onDeleteCardClick={handleDeletePlaceClick}
          onCardClick={handleCardClick}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
        <PopupWithForm
          name="profile"
          title="Edit profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
        >
          <label className="popup__label" htmlFor="name">
            Type here your name
          </label>
          <input
            id="profileName"
            className="popup__input popup__name"
            type="text"
            placeholder="Name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="profileName-input-error"></span>
          <label className="popup__label" htmlFor="about">
            Type here about yourself
          </label>
          <input
            id="profileAbout"
            className="popup__input popup__about"
            type="text"
            placeholder="About me"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="profileAbout-input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="new-image"
          title="New place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Create"
        >
          <label className="popup__label" htmlFor="title">
            Type here the photo title
          </label>
          <input
            id="imageName"
            className="popup__input popup__input_title"
            type="text"
            placeholder="Title"
            required
            minLength="1"
            maxLength="30"
          />
          <span className="imageName-input-error"></span>
          <label className="popup__label" htmlFor="link">
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
          buttonText="Yes"
        ></PopupWithForm>

        <PopupWithForm
          name="edit-pic"
          title="Change profile picture"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Save"
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
      </div>
    </currentUserContext.Provider>
  );
}

export default App;
