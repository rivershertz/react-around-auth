import { useEffect, useState } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
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
import { signUp, signIn, autoSignIn } from '../utils/auth';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);

  let history = useHistory();
  const JWT = localStorage.getItem('jwt');
  const [userInfo, setUserInfo] = useState('');

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
    setIsInfoToolTipOpen(false);
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

  // handle sign up
  function onSignUp(data) {
    signUp(data.email, data.password)
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error ${res.status}`)
      )
      .then((res) => {
        setIsInfoToolTipOpen(true);
        setIsRegisterSuccessful(true);
        history.push('/login');
      })
      .catch((err) => {
        setIsInfoToolTipOpen(true);
        setIsRegisterSuccessful(false);
        console.log(err);
      });
  }

  function onSignIn(data) {
    signIn(data.email, data.password)
      .then((res) => {
        setIsLoggedIn(true);
        console.log(res);
        history.push('/');
      })
      .catch((err) => console.log(err));
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    history.push('/login');
  }

  // auto sign in
  useEffect(() => {
    if (JWT) {
      console.log(JWT);
      autoSignIn(JWT)
        .then((res) => {
          if (res) {
            setUserInfo(res.data.email);
            setIsLoggedIn(true);
            history.push('/');
          }
        })
        .catch((err) => console.log(err));
    }
  }, [JWT, history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header handleSignOut={handleSignOut} userEmail={userInfo} />

        <Switch>
          <ProtectedRoute exact path='/' isLoggedIn={isLoggedIn}>
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

          <Route path='/login'>
            <Login onSignIn={onSignIn} />
          </Route>
          <Route path='/signup'>
            <Register onSignUp={onSignUp} />
            <InfoToolTip
              onClose={closeAllPopups}
              isOpen={isInfoToolTipOpen}
              isSuccessful={isRegisterSuccessful}
            />
          </Route>
          <Route>
            {isLoggedIn ? <Redirect to='/' /> : <Redirect to='/login' />}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
