import multer from 'multer'
import routes from './routes'

const multerVideo = multer({ dest: 'uploads/videos/' })
const multerAvatar = multer({ dest: 'uploads/avatars/' })

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WebTube'
  res.locals.routes = routes
  res.locals.loggedUser = req.user || null
  next()
}

const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home)
  } else {
    next()
  }
}

const onlyPrivate = (req, res, next) => {
  if (!req.user) {
    res.redirect(routes.home)
  } else {
    next()
  }
}

const uploadVideo = multerVideo.single('videoFile')
const uploadAvatar = multerAvatar.single('avatar')

export { localsMiddleware, uploadVideo, onlyPublic, onlyPrivate, uploadAvatar }
