const fieldValidation = (fields) => {
  for (let key in fields) {
    if (!fields[key]) {
      return false;
    }
  }

  return true;
};

export default fieldValidation;
