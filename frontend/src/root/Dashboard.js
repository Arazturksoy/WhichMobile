import React, { Component } from "react";
import Brands from "../products/Brands";
import Products from "../products/Products";

export default class Dashboard extends Component {
  state = {
    home: false,
    currentBrand: ""
  };

  showPage = (click, brand) => {
    if (click) {
      this.setState({ home: true });
      this.setState({ currentBrand: brand });
    } else {
      return;
    }
  };

  render() {
    return (
      <div><br></br>
        {this.state.home === false ? (
          <Brands showPage={this.showPage} />
        ) : (
          <Products currentBrand={this.state.currentBrand}/>
        )}
      </div>
    );
  }
}
