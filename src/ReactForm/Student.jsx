import React, { Component } from "react";
import { connect } from "react-redux";

class Student extends Component {
  renderStudent = () => {
    return this.props.studentList.map((ele) => {
      return (
        <tr key={ele.maSV}>
          <th>{ele.maSV}</th>
          <td>{ele.fullname}</td>
          <td>{ele.phone}</td>
          <td>{ele.email}</td>
          <td>
            <button className="btn btn-primary">Sửa</button>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "DELETE_STUDENT",
                  payload: ele,
                })
              }
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
      <div>
        <div className="py-5">
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
