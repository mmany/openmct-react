import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "./MainPage";
import { OpenmctInstance } from "./components/OpenmctInstance";

function RootRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sub' element={<div>Sub Page</div>} />
        <Route path='/openmct' element={<OpenmctInstance />} />
      </Routes>
    </BrowserRouter>
  );
}

export { RootRouter };
