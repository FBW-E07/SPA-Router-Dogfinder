export default function Dog({ dogs, currentDog }) {
    const dog = dogs.find(x => x.name === currentDog)

    if (!dog) {
      return <p>Dog {currentDog} not found</p>
    }

    return (
      <div className="Dog">
        <img src={dog.image} alt="dog" />
        <h1>Name: {dog.name}</h1>
        <h2>Age: {dog.age}</h2>
        <ul>
            {dog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
        </ul>
      </div>
    )
  }
  