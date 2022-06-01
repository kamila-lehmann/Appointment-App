import { StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppInfo from "./AppInfo";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import SearchForm from "./SearchForm";
import SpecialistDetails from "./SpecialistDetails";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/specialist/:id" element={<SpecialistDetails />} />
          <Route path="/" element={<SearchForm />} />
        </Routes>
        <AppInfo />
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
