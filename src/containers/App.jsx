import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Homescreen, Authentication } from "../pages";
const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/*" element={<Homescreen />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </Suspense>
  );
};

export default App;
