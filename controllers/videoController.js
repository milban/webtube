import routes from '../routes'
import Video from '../models/Video'

// Global
const home = async (req, res) => {
  try {
    const videosData = await Video.find({})
    res.render('home', { pageTitle: 'Home', videosData })
  } catch (error) {
    console.log(error)
    res.render('home', { pageTitle: 'Home', videosData })
  }
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
const postUploadVideo = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  })
  console.log(newVideo)
  res.redirect(routes.videoDetail(newVideo.id))
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
