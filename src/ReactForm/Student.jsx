import React, { Component } from "react";
import { createRef } from "react";
import { connect } from "react-redux";
import {
  deleteStudentAction,
  editStudentAction,
} from "../Store/action/student";

class Student extends Component {
  buttonRef = createRef();

  state = {
    keyword: "",
  };

  handleChange = (event) => {
    this.setState({ keyword: event.target.value });
  };

  renderStudent = () => {
    const data = this.props.studentList.filter((student) => {
      return (
        student.fullname
          .toLowerCase()
          .trim()
          .indexOf(this.state.keyword.toLowerCase().trim()) !== -1
      );
    });

    return data.map((ele) => {
      return (
        <tr key={ele.maSV}>
          <th>{ele.maSV}</th>
          <td>{ele.fullname}</td>
          <td>{ele.phone}</td>
          <td>{ele.email}</td>
          <td>
            <button
              ref={this.buttonRef}
              onClick={() => {
                this.props.dispatch(editStudentAction(ele));
              }}
              className="btn btn-primary"
            >
              Sửa
            </button>
            <button
              onClick={() => this.props.dispatch(deleteStudentAction(ele))}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="py-5">
        <div className="input-group w-25 pb-3">
          <input
            onChange={this.handleChange}
            type="search"
            className="form-control rounded"
            placeholder="Họ tên"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderStudent()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ...state.studentReducer,
  };
};

export default connect(mapStateToProps)(Student);
