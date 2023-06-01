import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import GetinTouch from "./components/contact/GetinTouch";
import About from "./components/about/About";
import Companies from "./components/companies/Companies";
import Research from "./components/research/Research";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<GetinTouch />} />
          <Route exact path="/companies" element={<Companies />} />
          <Route exact path="/research" element={<Research />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
