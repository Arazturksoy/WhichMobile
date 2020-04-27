import React, { Component } from "react";
import { MDBContainer,  MDBFooter } from "mdbreact";

export default class Footer extends Component {
  render() {
    return (
      <MDBFooter
        color="stylish-color-dark"
        className="page-footer font-small pt-4 mt-4"
      >
       
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-fb mx-1">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-tw mx-1">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-gplus mx-1">
                <i className="fab fa-google-plus"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-li mx-1">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-dribbble mx-1">
                <i className="fab fa-dribbble"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> Which Mobile </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}
