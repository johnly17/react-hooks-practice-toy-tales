import React, {useState} from "react";

function ToyForm({ handleNewToy }) {

  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] = useState("")
  const [newToyLikes, setNewToyLikes] = useState(0)

  

  function handleNewToySubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newToyName,
        "image": newToyImage,
        "likes": newToyLikes
      })
    })
      .then(r=>r.json())
      .then((data)=> handleNewToy(data))

  }


  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleNewToySubmit}>
        <h3>Create a toy!</h3>
        <input
          name="name"
          type="text"
          value={newToyName}
          onChange={(e) => setNewToyName(e.target.value)}
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          name="image"
          type="text"
          value={newToyImage}
          onChange={(e) => setNewToyImage(e.target.value)}
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
