import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateData from "./pages/CreateData";
import ShowData from "./pages/ShowData";
import EditData from "./pages/EditData";
import DeleteData from "./pages/DeleteData";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/datas/create" element={<CreateData />} />
        <Route path="/datas/details/:id" element={<ShowData />} />
        <Route path="/datas/edit/:id" element={<EditData />} />
        <Route path="/datas/delete/:id" element={<DeleteData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
