function Card({card, onCardClick, link, name, likes}) {
    function handleClick() {
        onCardClick(card)
    }
  return (
    <li className={`photos__card`}>
      <button className="photos__remove" type="button"></button>
      <img className="photos__img" src={link} alt="picture in feed" onClick={handleClick} />
      <div className="photos__interactive">
        <h2 className="photos__title">{name}</h2>
        <div className="photos__likes-section">
          <button className="photos__like" type="button" />
          <p className="photos__like-counter">{likes}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
