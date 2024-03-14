let regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,20}$/;

const isPasswordValid = (password) => regex.test(password);

module.exports = isPasswordValid;