import React, { useState } from "react";
import "./App.css";

const EventHandlingExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [nameValue, setNameValue] = useState<string>("");
  const [clickCount, setClickCount] = useState<number>(0);

  // Função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(event.target.value);
  };

  // Função para manipular cliques no botão
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  // Função para manipular "descliques" no botão
  const handleButtonUnclick = () => {
    if (clickCount > 0) {
      setClickCount(clickCount - 1);
    }
  };

  return (
    <div>
      <h1>Exemplo de Manipulação de Eventos</h1>
      <div>
        <label htmlFor="inputField">Digite algo: </label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Você digitou: {inputValue}</p>
      </div>
      <div>
        <label htmlFor="nameField">Digite seu nome:</label>
        <input
          type="text"
          id="nameField"
          value={nameValue}
          onChange={handleNameChange}
        />
        <p>Seu nome é: {nameValue}</p>
      </div>
      <div>
        <button onClick={handleButtonClick}>Clique aqui</button>
        <button onClick={handleButtonUnclick}>Desfazer clique</button>
        <p>O botão foi clicado {clickCount} vezes</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <EventHandlingExample />
    </div>
  );
}

export default App;
