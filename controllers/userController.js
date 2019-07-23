import routes from '../routes'

// Global
const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}
const postJoin = (req, res) => {
  console.log(req.body)
  const {
    body: { name, email, password, password2 }
  } = req
  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    // To Do: Register User
    // To Do: Log User in
    res.status(200)
    res.redirect(routes.home)
  }
}
const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' })
const postLogin = (req, res) => {
  console.log(req.body)
  const {
    body: { email, password }
  } = req
  // To Do: Check email and password
  res.redirect(routes.home)
}
const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home)
}

// Users
const users = (req, res) => res.render('users', { pageTitle: 'Users' })
const userDetail = (req, res) => res.render('userDetail', { pageTitle: 'UserDetail' })
const editProfile = (req, res) => res.render('editProfile', { pageTitle: 'EditProfile' })
const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'ChangePassword' })

export {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  users,
  userDetail,
  editProfile,
  changePassword
}
