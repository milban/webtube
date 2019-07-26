import multer from 'multer'
import routes from './routes'

const multerVideo = multer({ dest: 'uploads/videos/' })

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WebTube'
  res.locals.routes = routes
  res.locals.user = req.user || null
  console.log(req.user)
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

export { localsMiddleware, uploadVideo, onlyPublic, onlyPrivate }
