import passport from 'passport'
import routes from '../routes'
import User from '../models/User'

// Global
const getJoin = (req, res) => {
  res.render('join', { pageTitle: 'Join' })
}
const postJoin = async (req, res, next) => {
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

const githubLogin = passport.authenticate('github')
const githubLoginCallback = passport.authenticate('github', { failureRedirect: routes.login })
const postGithubLogin = (req, res) => {
  res.redirect(routes.home)
}

const googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] })
const googleLoginCallback = passport.authenticate('google', { failureRedirect: routes.login })
const postGoogleLogin = (req, res) => {
  res.redirect(routes.home)
}

const logout = (req, res) => {
  req.logout()
  res.redirect(routes.home)
}

// Users
const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const user = await User.findById(id)
    res.render('userDetail', { pageTitle: 'UserDetail', user })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}
const getEditProfile = (req, res) => res.render('editProfile', { pageTitle: 'EditProfile' })
const changePassword = (req, res) => res.render('changePassword', { pageTitle: 'ChangePassword' })
const getMe = (req, res) => {
  res.render('userDetail', { pageTitle: 'User Detail', user: req.user })
}

export {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  userDetail,
  getEditProfile,
  changePassword,
  githubLoginCallback,
  githubLogin,
  postGithubLogin,
  getMe,
  googleLogin,
  googleLoginCallback,
  postGoogleLogin
}
