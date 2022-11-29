import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import RecipeList from "./RecipeList.js";
import CategoryList from "./CategoryList";
import RecipeDetail from "./RecipeDetail";
import CategoryDetail from "./CategoryDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipes" element={<RecipeList />}>
          <Route path=":id" element={<RecipeDetail />} />
        </Route>
        <Route path="/categories" element={<CategoryList />}>
          <Route path=":id" element={<CategoryDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("App");
const root = ReactDOMClient.createRoot(container)
root.render(<App />);

export default App;
