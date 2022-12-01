import React, { useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);
  

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? 
      <ToyForm 
      handleNewToy={handleNewToy}
      /> 
      : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys}
      setToys={setToys}
      />
    </>
  );
}

export default App;
