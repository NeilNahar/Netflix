const FormValidation = (email, password) => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!emailRegex) {
    return "Email is not valid";
  } else if (!passwordRegex) {
    return "Password is not valid";
  }
  return null;
};

export default FormValidation;
