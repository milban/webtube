import passport from 'passport'
import routes from '../routes'
import User from '../models/User'

// Global
const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}
const postJoin = async (req, res, next) => {
  console.log(req.body)
  const {
    body: { name, email, password, password2 }
  } = req
  if (password !== password2) {
    res.status(400)
    res.render('join', { pageTitle: 'Join' })
  } else {
    try {
      const user = await User({
        name,
        email
      })
      await User.register(user, password)
      next()
    } catch (error) {
      console.log(error)
      res.redirect(routes.join)
    }
  }
}

const getLogin = (req, res) => res.render('login', { pageTitle: 'Login' })
const postLogin = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home
})
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
