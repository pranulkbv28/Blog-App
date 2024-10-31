const handleInputs = (input) => {
  for (let key in input) {
    if (!input[key]) {
      return false;
    }
  }

  return true;
};

export default handleInputs;
