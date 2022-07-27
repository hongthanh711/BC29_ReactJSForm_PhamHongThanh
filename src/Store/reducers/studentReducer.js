import {
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  UPDATE_STUDENT,
} from "../type/student";

const DEFAULT_STATE = {
  buttonInnerHTML: "Thêm sinh viên",
  studentList: [],
  selectedStudent: null,
};

export const studentReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT: {
      const data = [...state.studentList];

      data.push(payload);

      state.studentList = data;

      return { ...state };
    }
    case DELETE_STUDENT: {
      const data = [...state.studentList];

      const index = data.findIndex((ele) => ele.maSV === payload.maSV);
      if (index !== -1) {
        data.splice(index, 1);
      }

      state.studentList = data;

      return { ...state };
    }

    case EDIT_STUDENT: {
      state.selectedStudent = payload;

      state.buttonInnerHTML = "Sửa";
      return { ...state };
    }

    case UPDATE_STUDENT: {
      const data = [...state.studentList];

      const index = data.findIndex((ele) => ele.maSV === payload.maSV);

      if (index !== -1) {
        data[index] = payload;
      }

      state.studentList = data;

      state.selectedStudent = null;
      state.buttonInnerHTML = "Thêm Sinh Viên";

      return { ...state };
    }

    default:
      return state;
  }
};
