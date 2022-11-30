import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import parse from 'html-react-parser';

const RecipeDetail = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `../api/recipes/${id}`;

    const fetchData = () => {
      fetch(`../api/recipes/1`)
        .then((response) => {
          console.log("zaza");
          console.log(response);
          return response.json()
        })
        .then((data) => {
          console.log(data);
          setData(data);
        });
    };
    fetchData();
  }, []);

  return data && 
      <div className="recipe">
        <h1>{data.title}</h1>
        <h2>Category: {data.category_title}</h2>
        <div className="cooktime">
          <h3>{data.cook_time}</h3>
        </div>
        <br />
        <h2>{parse(data.ingredients)}</h2>
        <br />
        <h2>{parse(data.steps)}</h2>
      </div>
};

export default RecipeDetail;
