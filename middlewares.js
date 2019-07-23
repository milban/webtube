import routes from './routes'

const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WebTube'
  res.locals.routes = routes
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  }
  next()
}

export { localsMiddleware }
