// Global
const join = (req, res) => res.send('join')
const login = (req, res) => res.send('login')
const logout = (req, res) => res.send('logout')

// Users
const users = (req, res) => res.send('users')
const userDetail = (req, res) => res.send('userDetail')
const editProfile = (req, res) => res.send('editProfile')
const changePassword = (req, res) => res.send('changePassword')

export { join, login, logout, users, userDetail, editProfile, changePassword }
