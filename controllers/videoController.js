import routes from '../routes'

// Global
const home = (req, res) => {
  res.render('home', { pageTitle: 'Home', videosData })
} // (template, added variable to template)
const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req
  console.log(searchingBy)
  res.render('search', { pageTitle: 'Search', searchingBy, videosData })
}

// Video
const videos = (req, res) => res.render('videos', { pageTitle: 'Videos' })

const getUploadVideo = (req, res) => res.render('uploadVideo', { pageTitle: 'UploadVideo' })
const postUploadVideo = (req, res) => {
  const {
    body: { file, title, description }
  } = req
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(videosData[0].id))
}

const videoDetail = (req, res) => res.render('videoDetail', { pageTitle: 'VideoDetail' })
const editVideo = (req, res) => res.render('editVideo', { pageTitle: 'EditVideo' })
const deleteVideo = (req, res) => res.render('deleteVideo', { pageTitle: 'DeleteVideo' })

export {
  home,
  search,
  videos,
  getUploadVideo,
  postUploadVideo,
  videoDetail,
  editVideo,
  deleteVideo
}
