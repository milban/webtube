import passport from 'passport'
import passportGithub from 'passport-github'
import User from './models/User'
import routes from './routes'

passport.use(User.createStrategy())
const GithubStrategy = passportGithub.Strategy

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    async (accessToken, refreshToken, profile, cb) => {
      const {
        _json: { id, avatar_url, name, email }
      } = profile
      try {
        const user = await User.findOne({ email })
        if (user) {
          user.githubId = id
          user.save()
          return cb(null, user)
        }
        const newUser = await User.create({
          name,
          email,
          avatarUrl: avatar_url,
          githubId: id
        })
        return cb(null, newUser)
      } catch (error) {
        return cb(error)
      }
      // User.findOrCreate({ githubId: profile.id }, (err, user) => cb(err, user))
    }
  )
)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
