import React, { Component } from "react";
import './main.css'

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("../api/categories")
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
        {this.state.data.map(category => {
          return (
            <div className="container" key={category.id}>
                <h1>{category.title}</h1>
                <div className="preview" style={{background: `url(${category.preview})`}}></div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default CategoryList;
