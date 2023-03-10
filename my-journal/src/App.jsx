import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Journal from "./components/Journal/Journal.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./components/Edit/Edit.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Journal-React">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/journal">
            <Route index element={<Journal />} />
            <Route path=":id" element={<Edit />} />
          </Route>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
