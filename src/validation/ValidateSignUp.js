import validator from "validator";


const validateSignUp = (data) => {
  let errors = {};

  const { username, email, password, confirmPassword } = data;

  if (localStorage.users) {
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
    let index = lsUsers.findIndex((user) => user.username === username);
    if (index > -1) {
      errors.username = "Username already exists!";
    }
  }

  if (validator.isEmpty(username)) {
    errors.username = "Username field is required.";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required.";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required.";
  }

  if (!validator.equals(password, confirmPassword)) {
    errors.confirmPassword = "Password should match!";
  }

  if (validator.isEmpty(confirmPassword)) {
    errors.confirmPassword = "Confirm Password field is required.";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default validateSignUp;