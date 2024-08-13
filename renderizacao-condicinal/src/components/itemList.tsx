import React, { useState } from "react";
import "../App.css";

// Definindo a interface para os itens da lista
interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
  // Componente de Lista que renderiza itens com base em uma condição
  const ItemList: React.FC = () => {
    const [items] = useState<Item[]>([
      { id: 1, name: "Apple" , price: 12.99, quantity: 3},
      { id: 2, name: "Banana", price: 64.31, quantity:23 },
      { id: 3, name: "Cherry", price: 45.00, quantity: 350 },
    ]);
  
    const [showItems, setShowItems] = useState<boolean>(true);
    return (
      <div>
        <h1>Lista de Itens</h1>
        <button onClick={() => setShowItems(!showItems)}>
          {showItems ? "Esconder Itens" : "Mostrar Itens"}
        </button>
  
        {/* Renderização Condicional */}
        {showItems ? (
          <ul>
            {/* Renderizando a lista de itens */}
            {items.map((item) => (
              <li key={item.id}>Nome: {item.name}, preço {item.price}, quantidade: {item.quantity}</li>
            ))}
          </ul>
        ) : (
          <p>A lista está oculta</p>
        )}
      </div>
    );
  };

  export default ItemList;