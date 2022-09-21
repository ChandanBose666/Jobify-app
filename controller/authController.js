const register = (req, res) => res.send('User Registered');
const login = (req, res) => res.send('User logged in');
const updateUser = (req, res) => res.send('User updated');

export { register, login, updateUser };