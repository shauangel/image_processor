import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Home from "./pages/Home";
import Photo from "./pages/Photo";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <MyNavbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photo" element={<Photo />} />
          </Routes>
      </>
  )
}

export default App
