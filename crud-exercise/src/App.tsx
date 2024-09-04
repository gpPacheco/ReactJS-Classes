import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddBook";
import EditProduct from "./pages/EditBook";
function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />{" "}
      </Routes>
    </Router>
  );
}
export default App;
