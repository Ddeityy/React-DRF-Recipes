import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import CategoryList from "./CategoryList";
import RecipeDetail from "./RecipeDetail";
import CategoryDetail from "./CategoryDetail";

const App = () => {
  return (
    <Routes>
      <Route path="ui/" element={<RecipeDetail />} >
        <Route path="ui/recipes/" element={<RecipeList />}/>
        <Route path="ui/recipes/:id" element={<RecipeDetail />} />
        <Route path="ui/categories/" element={<CategoryList />}/>
        <Route path="ui/categories/:id" element={<CategoryDetail />} />
      </Route>
    </Routes>
  );
};

const container = document.getElementById("App");
const root = ReactDOMClient.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;
