export const checkValidate = (email, password) => {
  const isEmailVaildate =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

  const isPasswordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailVaildate) return "Email is Not Valid";

  if (!isPasswordValidate) return "Password is Not Valid";

  return null;
};
