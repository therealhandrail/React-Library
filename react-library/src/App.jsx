import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation><Home /></Navigation>} />
        <Route path="/account" element={<Navigation><Account /></Navigation>} />
      </Routes>
    </Router>
  );
}

export default App;