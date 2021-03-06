// Global
const HOME = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

// Users
const USERS = '/users'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'
const ME = '/me'
const USER_DETAIL = '/:id'

// Videos
const VIDEOS = '/videos'
const UPLOAD_VIDEO = '/upload-video'
const VIDEO_DETAIL = '/:id'
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'

// Github
const GITHUB = '/auth/github'
const GITHUB_CALLBACK = '/auth/github/callback'

// Google
const GOOGLE = '/auth/google'
const GOOGLE_CALLBACK = '/auth/google/callback'

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  me: ME,
  userDetail: id => {
    if (id) return `/users/${id}`
    return USER_DETAIL
  },
  videos: VIDEOS,
  uploadVideo: UPLOAD_VIDEO,
  videoDetail: id => {
    if (id) return `/videos/${id}`
    return VIDEO_DETAIL
  },
  editVideo: id => {
    if (id) return `/videos/${id}/edit`
    return EDIT_VIDEO
  },
  deleteVideo: id => {
    if (id) return `/videos/${id}/delete`
    return DELETE_VIDEO
  },
  github: GITHUB,
  githubCallback: GITHUB_CALLBACK,
  google: GOOGLE,
  googleCallback: GOOGLE_CALLBACK
}

export default routes
