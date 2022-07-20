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
  function handleCardClick() {
    document.querySelector(".popup_image-popup").classList.add("popup_opened");
  }
  return (
    <body class="page">
      <PopupWithForm
        name="edit-pic"
        title="Change profile picture"
        isOpen={isEditAvatarPopupOpen}
      />
      <PopupWithForm
        name="profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
      />
      <PopupWithForm
        name="new-image"
        title="New place"
        isOpen={isAddPlacePopupOpen}
      />
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
      />
      <ImagePopup onCardClick={handleCardClick} />
      <Footer />
      <template id="template">
        <li className="photos__card">
          <button className="photos__remove" type="button"></button>
          <img className="photos__img" src="#" alt="picture in feed" />
          <div className="photos__interactive">
            <h2 className="photos__title"></h2>
            <div className="photos__likes-section">
              <button className="photos__like" type="button"></button>
              <p className="photos__like-counter"></p>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
