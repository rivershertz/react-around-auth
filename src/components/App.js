import { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import api from '../utils/api';
import EditProfilePopup from './EditPrifilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import InfoToolTip from './InfoToolTip';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const isLoggedIn = true;

  //fetch user info
  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //fetch initial cards
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // popup open handlers
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
  }

  // popup close handler
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  // updating user profile name and about
  function handleUpdateUser(data) {
    api
      .setUserInfo(data.name, data.about)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // updating user avatar
  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
        });
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // CARDS!!

  // card handlers
  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) =>
            currentCard._id === card._id ? '' : currentCard
          )
        );
      })
      .catch((err) => console.log(err));
  }

  // new card handler
  function handleAddPlaceSubmit(data) {
    api
      .createCard(data)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header />

        <Switch>
          <Route exact path='/'>
            <ProtectedRoute>
              <Main
                onEditProfileClick={handleEditProfileClick}
                onAddPlaceClick={handleAddPlaceClick}
                onEditAvatarClick={handleEditAvatarClick}
                onDeleteCardClick={handleDeletePlaceClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
                cards={cards}
              />
              <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}
                isOpen={isImagePopupOpen}
              />
              <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUser={handleUpdateUser}
              />
              <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
                onAddPlace={handleAddPlaceSubmit}
              />
              <PopupWithForm
                name='delete'
                title='Are you sure?'
                isOpen={isConfirmDeleteOpen}
                buttonText='Yes'
              />
              <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
                onUpdateAvatar={handleUpdateAvatar}
              />
              <Footer />
            </ProtectedRoute>
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/signup'>
            <Register />
          </Route>
          <Route></Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
