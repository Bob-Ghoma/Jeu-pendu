import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [mot , setMot] = ["FRANCE","MESSI","MUSIQUE","ANTICONSTITUTIONNELLEMENT","Fortnite"]
  let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  const [randomWords] =useState(mot[Math.floor(Math.random() * mot.length)])
  const [counter, setCounter] = useState(10)
    const [triedLetters, setTriedLetters] = useState([])

  // function editMot(event) {
  //   setMot(event.target.value)
  // }
  function displayLife() {
      return <p> Vie : {counter}</p>
  }

  function displayWords() {
      const regex = new RegExp(triedLetters.join('|'),'')
      let lettre = randomWords.replace(regex,'*')

      return lettre
  }

   function testlettre(event) {
       let lettre = event.target.value
       let i = triedLetters.indexOf(lettre)
       triedLetters.splice(i,1)
       setTriedLetters([triedLetters])
   }

  function alphaLettre() {
   return alphabet.map((lettre, id) => <button onClick={testlettre} key={id} value={lettre}>{lettre}</button>)
  }

  function endGame() {
      if (counter == 0){
          return "Pendu ! Réessayez !"
      }
  }

  return (
    <div className="App">
      {/*{<input type="passwd" value={mot} onChange={editMot}/>}*/}
      {/*<button onClick={life}>-1</button>{counter}*/}
        <div>{displayLife()}</div>
        <div>{displayWords()}</div>
        <div>{alphaLettre()}</div>
      {endGame()}
    </div>
  );
}
export default App;
