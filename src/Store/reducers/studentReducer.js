const DEFAULT_STATE = {
  studentList: [],
};

export const studentReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case "ADD_STUDENT": {
      const data = [...state.studentList];

      data.push(payload);

      state.studentList = data;

      return { ...state };
    }
    case "DELETE_STUDENT": {
      const data = [...state.studentList];

      const index = data.findIndex((ele) => ele.maSV === payload.maSV);
      if (index !== -1) {
        data.splice(index, 1);
      }

      state.studentList = data;

      return { ...state };
    }

    default:
      return state;
  }
};
