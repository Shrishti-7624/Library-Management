import validator from "validator";

const validateSignIn = (data) => {
  const { name, password } = data;
  let errors = {};

  if (localStorage.users) {
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
    let index = lsUsers.findIndex(
      (user) => user.username === name && user.password === password
    );
    if (index == -1) {
      errors.error = "Log in Failed";
    }
  } else {
    errors.error = "No Registed User";
  }
  if (validator.isEmpty(name)) {
    errors.name = "Username field is required.";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateSignIn;
