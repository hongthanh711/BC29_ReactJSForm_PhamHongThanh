import React, { Component } from "react";

export default class Student extends Component {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
