const registerUser = async (req, res) => {
  res.send("Register User");
};

const loginUser = async (req, res) => {
  res.send("Login User");
};

module.exports = { registerUser, loginUser };
