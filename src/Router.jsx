import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./layouts/DefaultLayout/pages/Home";
import Projetos from "./layouts/DefaultLayout/pages/Projects";
import Skills from "./layouts/DefaultLayout/pages/Skills";
import About from "./layouts/DefaultLayout/pages/About";
import Contact from "./layouts/DefaultLayout/pages/Contact";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
    </Routes>
  );
}
