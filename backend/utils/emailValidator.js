let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const isEmailValid = (email) => emailRegex.test(email);

module.exports = isEmailValid;