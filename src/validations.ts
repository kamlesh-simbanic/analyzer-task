import { User, ValidationError } from "./types";

export const validateUsers = (users: User[]) => {
  const validationsErrors: ValidationError[] = [];

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const errors: ValidationError = {};

    if (!user.name.trim()) {
      errors.name = "Name is Required";
    } else if (user.name.trim().length < 3) {
      errors.name = "should have atleast three alphabets";
    }

    console.log("sdd", isNaN(user.age));

    if (!user.age) {
      errors.age = "Age is Required";
    } else if (isNaN(user.age)) {
      errors.age = "Invalid value for Age";
    } else if (Number(user.age) < 18) {
      errors.age = "Age can not be less than 18";
    }

    if (!user.department) {
      errors.department = "Department is Required";
    } else if (!["IT", "HR"].includes(user.department)) {
      errors.department = "Please select valid department";
    }

    if (!user.salary) {
      errors.salary = "Salary is Required";
    } else if (isNaN(user.salary)) {
      errors.salary = "Invalid value for salary";
    } else if (Number(user.salary) < 1) {
      errors.salary = "salary can not be less than 1";
    }

    if (Object.keys(errors).length) validationsErrors[i] = errors;
  }

  return validationsErrors;
};
