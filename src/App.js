import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    // <div>
    //   <h1>hello</h1>
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/hooks" element={<Hooks />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
