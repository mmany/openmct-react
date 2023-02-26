import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { OpenmctInstance } from "./components/OpenmctInstance";
import { SubPage } from "./SubPage";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sub' element={<SubPage />} />
        <Route path='/openmct' element={<OpenmctInstance />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RootRouter };
