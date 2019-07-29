import passport from 'passport'
import passportGithub from 'passport-github'
import passportGoogle20 from 'passport-google-oauth20'
import User from './models/User'
import routes from './routes'

passport.use(User.createStrategy())
const GithubStrategy = passportGithub.Strategy
const Google20Strategy = passportGoogle20.Strategy

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    async (accessToken, refreshToken, profile, cb) => {
      const {
        _json: { id, avatar_url: avatarUrl, name, email }
      } = profile
      try {
        const user = await User.findOne({ email })
        if (user) {
          user.githubId = id
          if (!user.avatarUrl) user.avatarUrl = avatarUrl
          user.save()
          return cb(null, user)
        }
        const newUser = await User.create({
          name,
          email,
          avatarUrl,
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

passport.use(
  new Google20Strategy(
    {
      clientID: process.env.GG_ID,
      clientSecret: process.env.GG_SECRET,
      callbackURL: `http://localhost:4000${routes.googleCallback}`
    },
    async (accessToken, refreshToken, profile, cb) => {
      const {
        _json: { sub: id, picture: avatarUrl, name, email }
      } = profile
      try {
        const user = await User.findOne({ email })
        if (user) {
          user.googleId = id
          if (!user.avatarUrl) user.avatarUrl = avatarUrl
          user.save()
          return cb(null, user)
        }
        const newUser = await User.create({
          name,
          email,
          avatarUrl,
          googleId: id
        })
        return cb(null, newUser)
      } catch (error) {
        console.log(error)
        return cb(error)
      }
    }
  )
)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
