import {
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  UPDATE_STUDENT,
} from "../type/student";

const addStudentAction = (values) => {
  return {
    type: ADD_STUDENT,
    payload: values,
  };
};
const updateStudentAction = (values) => {
  return {
    type: UPDATE_STUDENT,
    payload: values,
  };
};

const editStudentAction = (values, ref) => {
  return {
    type: EDIT_STUDENT,
    payload: values,
  };
};

const deleteStudentAction = (values) => {
  return {
    type: DELETE_STUDENT,
    payload: values,
  };
};

export {
  addStudentAction,
  updateStudentAction,
  editStudentAction,
  deleteStudentAction,
};
