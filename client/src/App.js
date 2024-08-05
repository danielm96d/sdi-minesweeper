import "./App.css";
import NotFound from "./components/NotFound";
import GamePage from "./components/GamePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
