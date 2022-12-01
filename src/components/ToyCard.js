import React, { useState } from "react";

function ToyCard({ id, name, image, likes, onDeleteClick, toy }) {

  const [likeCount, setLikeCount] = useState(likes)

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
      .then(() => onDeleteClick(toy))

  }

  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likeCount + 1
      })
    })
      .then(r => r.json())
      .then(() => {
        setLikeCount(likeCount + 1);
      })
  }


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p

      >
        {likeCount} Likes
      </p>
      <button
        className="like-btn"
        onClick={handleLikeClick}
      >Like {"<3"}</button>
      <button
        className="del-btn"
        onClick={handleDelete}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
