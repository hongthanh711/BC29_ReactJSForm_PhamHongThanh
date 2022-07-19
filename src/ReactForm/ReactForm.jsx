import React, { Component } from "react";
import Register from "./Register";
import Student from "./Student";

export default class ReactForm extends Component {
  render() {
    return (
      <div>
        <Register />
        <Student />
      </div>
    );
  }
}
