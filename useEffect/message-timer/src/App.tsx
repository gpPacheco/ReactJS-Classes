import './App.css';
import ColorBox from './components/ColorBox';
import ColorInput from './components/ColorInput';
import { useState } from 'react';
import WidthInput from './components/WidthInput';
import WidthButton from './components/WidthButton';
function App() {
  const [color, setColor] = useState<string>('white');
  const [width, setWidth] = useState<number>(80)
    return (
        <div className="App">
          <h1>Mudar Cor de Fundo com useEffect</h1>
          <ColorInput color={color} setColor={setColor} />
          <ColorBox color={color} />
          <WidthInput width={width} setWidth={setWidth} />
          <WidthButton width={width} />
        </div>
    );
}
export default App;












// Users List
// import "./App.css";
// import ToggleMessage from "./components/ToggleMessage";
// import UsersList from "./components/UsersList";

// function App() {
//   return (
//     <div className="App">
//         <h1>User List</h1>
//         <UsersList />
//         <ToggleMessage />
//     </div>
//   );
// }

// export default App;




// Message Timer
// import "./App.css";
// import Timer from "./components/Timer";
// import Message from "./components/Message";
// import Message2 from "./components/Message2";

// function App() {
//   return (
//     <div className="App">
//         <h1>Message Timer</h1>
//       <Timer />
//       <Message />
//       <Message2 />
//     </div>
//   );
// }

// export default App;
