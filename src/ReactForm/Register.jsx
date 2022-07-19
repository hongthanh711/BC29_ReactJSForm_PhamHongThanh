import React, { Component } from "react";

import { connect } from "react-redux";

class Register extends Component {
  state = {
    value: {
      maSV: "",
      fullname: "",
      phone: "",
      email: "",
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      value: {
        ...this.state.value,
        [name]: value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: "ADD_STUDENT",
      payload: this.state.value,
    });
  };

  render() {
    return (
      <div>
        <h2 className="bg-dark text-white py-3">Thông tin sinh viên</h2>
        <form>
          <div className="row">
            <div className="form-group col-6">
              <label>Mã SV</label>
              <input
                name="maSV"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-6">
              <label>Họ tên</label>
              <input
                name="fullname"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-6">
              <label>Số điện thoại</label>
              <input
                name="phone"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col-6">
              <label>Email</label>
              <input
                name="email"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
            </div>
          </div>

          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-success text-white"
          >
            Thêm sinh viên
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(Register);
