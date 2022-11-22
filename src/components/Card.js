import React from 'react';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({
  card,
  onCardClick,
  link,
  name,
  likes,
  onCardLike,
  onCardDelete,
}) {
  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }
  const [isOwn, setIsOwn] = useState(false);
  const currentUser = React.useContext(CurrentUserContext);
  const isLiked = card.likes.some((user) => user._id === currentUser._id);

  useEffect(() => {
    setIsOwn(card.owner._id === currentUser._id);
  }, [card.owner._id, currentUser._id]);

  return (
    <li className={`photos__card`}>
      <button
        className={`${isOwn ? 'photos__remove' : 'photos__remove_hidden'}`}
        type='button'
        onClick={handleDeleteClick}
      />
      <img
        className='photos__img'
        src={link}
        alt='card'
        onClick={handleClick}
      />
      <div className='photos__interactive'>
        <h2 className='photos__title'>{name}</h2>
        <div className='photos__likes-section'>
          <button
            className={`photos__like ${isLiked ? 'photos__like_active' : ''}`}
            type='button'
            onClick={handleLikeClick}
          />
          <p className='photos__like-counter'>{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
