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
const USER_DETAIL = '/:id'

// Videos
const VIDEOS = '/videos'
const UPLOAD_VIDEO = '/upload-video'
const VIDEO_DETAIL = '/:id'
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  userDetail: id => {
    if (id) return `/users/${id}`
    else return USER_DETAIL
  },
  videos: VIDEOS,
  uploadVideo: UPLOAD_VIDEO,
  videoDetail: id => {
    if (id) return `/videos/${id}`
    else return VIDEO_DETAIL
  },
  editVideo: id => {
    if (id) return `/videos/${id}/edit`
    else return EDIT_VIDEO
  },
  deleteVideo: id => {
    if (id) return `/videos/${id}/delete`
    else return DELETE_VIDEO
  }
}

export default routes
