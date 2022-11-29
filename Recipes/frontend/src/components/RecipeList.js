import React, { Component } from "react";
import './main.css'
import { Link } from "react-router-dom";

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("../api/recipes")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.data.map(recipe => {
          return (
            <div className="container" key={recipe.id}>
                <h1>{recipe.title}</h1>
                <h3>{recipe.desc}</h3>
                <div className="preview" style={{background: `url(${recipe.preview})`}}></div>
                <h4>Category: <li><Link to={recipe.category.id}>{recipe.category_title}</Link></li></h4>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default RecipeList;
