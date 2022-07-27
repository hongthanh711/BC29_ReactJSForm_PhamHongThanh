import React, { Component } from "react";
import { createRef } from "react";

import { connect } from "react-redux";

class Register extends Component {
  formRef = createRef();

  state = {
    values: {
      maSV: "",
      fullname: "",
      phone: "",
      email: "",
    },
    errors: {
      maSV: "",
      fullname: "",
      phone: "",
      email: "",
    },
  };

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      nextProps.selectedStudent &&
      currentState.values.maSV !== nextProps.selectedStudent.maSV
    ) {
      currentState.values = nextProps.selectedStudent;
    }
    return currentState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleBlur = (event) => {
    let message = "";

    const {
      name,
      title,
      minLength,
      maxLength,
      validity: {
        valueMissing,
        tooLong,
        tooShort,
        patternMismatch,
        customError,
      },
    } = event.target;

    if (valueMissing) {
      message = `Nhập ${title}`;
    }

    if (tooLong || tooShort) {
      message = `Nhập ${minLength} đến ${maxLength} ký tự`;
    }

    if (patternMismatch) {
      message = `Vui lòng nhập ${title} đúng định dạng`;
    }

    // const index = this.props.studentList.findIndex(
    //   (ele) => ele.maSV === this.state.value.maSV
    // );
    // if (index !== -1) {
    //   customError = true;
    // }
    // console.log(event);
    // console.log(index);

    this.setState({
      errors: { ...this.state.errors, [name]: message },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      return;
    }

    this.props.dispatch({
      type: this.props.selectedStudent ? "UPDATE_STUDENT" : "ADD_STUDENT",
      payload: this.state.values,
    });

    this.setState(
      {
        values: {
          maSV: "",
          fullname: "",
          phone: "",
          email: "",
        },
      },
      () => {
        this.forceUpdate();
      }
    );
  };

  render() {
    const { maSV, fullname, phone, email } = this.state.values || {};
    return (
      <div>
        <h2 className="bg-dark text-white py-3">Thông tin sinh viên</h2>
        <form ref={this.formRef} noValidate onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <label>Mã SV</label>
              <input
                value={maSV}
                title="Mã SV"
                onBlur={this.handleBlur}
                required
                name="maSV"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
              {this.state.errors.maSV && (
                <span className="text-danger">{this.state.errors.maSV}</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Họ tên</label>
              <input
                value={fullname}
                title="Họ tên"
                pattern="^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$"
                onBlur={this.handleBlur}
                required
                minLength={4}
                maxLength={20}
                name="fullname"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
              {this.state.errors.fullname && (
                <span className="text-danger">
                  {this.state.errors.fullname}
                </span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Số điện thoại</label>
              <input
                value={phone}
                title="Số điện thoại"
                onBlur={this.handleBlur}
                required
                name="phone"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
              {this.state.errors.phone && (
                <span className="text-danger">{this.state.errors.phone}</span>
              )}
            </div>
            <div className="form-group col-6">
              <label>Email</label>
              <input
                value={email}
                title="Email"
                onBlur={this.handleBlur}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                name="email"
                onChange={this.handleChange}
                type="text"
                className="form-control"
              />
              {this.state.errors.email && (
                <span className="text-danger">{this.state.errors.email}</span>
              )}
            </div>
          </div>

          <button
            disabled={!this.formRef.current?.checkValidity()}
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

const mapStateToProps = (state) => {
  return { ...state.studentReducer };
};

export default connect(mapStateToProps)(Register);
