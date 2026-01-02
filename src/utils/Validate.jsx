export const checkValidateData = (email, password, name) => {
  const isNameValid = name !== undefined ? /^[a-zA-Z\s]{2,50}$/.test(name) : true;
  const isEmailValid = /^[\w\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password);

  if (name !== undefined && !isNameValid) return "*Name is not valid (2-50 characters, letters only)";
  if (!isEmailValid) return "*Email ID is not Valid";
  if (!isPasswordValid) return "*Password is not valid";

  return null;
};
