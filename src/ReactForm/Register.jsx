import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div>
        <h2 className="bg-dark text-white py-3">Thông tin sinh viên</h2>
        <form>
          <div className="row">
            <div className="form-group col-6">
              <label>Mã SV</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-6">
              <label>Họ tên</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-6">
              <label>Số điện thoại</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group col-6">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <button type="submit" className="btn btn-success text-white">
            Thêm sinh viên
          </button>
        </form>
      </div>
    );
  }
}
