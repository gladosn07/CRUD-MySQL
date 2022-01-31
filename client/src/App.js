import React, { useEffect, useState } from "react";
import Axios from 'axios'
import Cards from "./components/card/cards";
import "./App.css";

function App() {
  const [values, setValues] = useState();
  const [games, setGames] = useState();

  const handleChangevalues = (Value) => {
    setValues(prevValue => ({
      ...prevValue,
      [Value.target.name]: Value.target.value,
    }))
  }

  const handleClickButton = () => {
    Axios.post('http://localhost:3010/register', {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(()=>{
      setGames([
        ...games,
        {
          name: values.name,
          cost: values.cost,
          category: values.category,
        }
      ])
    })
  }
  console.log(games)

  useEffect(() => {
    Axios.get('http://localhost:3010/getCards')
    .then((res) => {
      setGames(res.data)
    })
  }, [])

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className='register-title'>Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangevalues}
        />

        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register-input"
          onChange={handleChangevalues}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register-input"
          onChange={handleChangevalues}
        />

        <button className='register-button' onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
      {typeof games !== 'undefined' && games.map((value) => (
        <Cards 
        key={value.id}
        games={games}
        setListGames={setGames}
        id={value.id}
        name={value.name}
        cost={value.cost}
        category={value.category}
        />
      ))}
    </div>
  );
}

export default App;
