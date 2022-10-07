const formValues = {}  
const formValidation = {}

export const validatePassword = (e) => {
  formValidation.password = e.target
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/
  console.log("Password validation...")
  console.log(!!(e.match(regExp)))

  return e.match(regExp)
}

export const getValid = (validKey)=>{
   return formValidation[validKey];
}

export const validateEmail = (email) => {
  // Создадим шаблон регулярного выражения. В нём применяются шаблонные строки
  // Гуглить по тегам: "шаблонные строки js", "регулярные выражения"
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return String(email)
    .toLowerCase()
    .match(regExp);
}

export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}

export const setFormValue = (valueKey, newValue, validator) => {
  formValues[valueKey] = newValue
  if (validator !== undefined) {
    formValidation[valueKey] = validator(newValue)
  }
}

export const getValidation = (validKey)=>{
    return formValidation[validKey]
}

export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}

export const submitSignInForm = () => {
    if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT");
    return false;
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  //window.location.reload();
  return true;
}
