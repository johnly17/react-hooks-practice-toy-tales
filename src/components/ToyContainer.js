import React, {useEffect} from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys}) {

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r=>r.json())
      .then(toys => setToys(toys))
  }, [])

  function onDeleteClick(deletedToy) {
    const updatedToys = toys.filter(toy => toy.id !== deletedToy.id)
    setToys(updatedToys)
  }



  const toyDiv = toys.map(toy => {
    return (
      <ToyCard 
      key={toy.id}
      name={toy.name}
      image={toy.image}
      likes={toy.likes}
      onDeleteClick={onDeleteClick}
      toy={toy}
      />
    )
  })


  return (
    <div id="toy-collection">
      {toyDiv}
      </div>
  );
}

export default ToyContainer;
