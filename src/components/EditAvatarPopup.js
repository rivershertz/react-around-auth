import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef(currentUser.avatar);

  function handleSubmit(e) {
    // console.log(avatarRef)
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="edit-pic"
      title="Change profile picture"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        id="editLink"
        className={`popup__input popup__input_url popup__input_edit-pic`}
        ref={avatarRef}
        type="url"
        placeholder="Image URL"
        required
      />
      <span className="editLink-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
