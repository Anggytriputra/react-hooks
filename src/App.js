import Home from "./pages/Home";
import About from "./pages/about";
import Error from "./pages/Error";
import Todo from "./pages/Todo";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Todo />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        {/* /* = semua */}
        <Route
          path="/*"
          element={<Error />}
        />
      </Routes>
    </div>
  );
}

export default App;
