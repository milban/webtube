import multer from 'multer'
import routes from './routes'

const multerVideo = multer({ dest: 'uploads/videos/' })

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WebTube'
  res.locals.routes = routes
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next()
}

const uploadVideo = multerVideo.single('videoFile')

export { localsMiddleware, uploadVideo }
