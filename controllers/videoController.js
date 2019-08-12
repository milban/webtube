import routes from '../routes'
import Video from '../models/Video'

// Global
const home = async (req, res) => {
  try {
    const videosData = await Video.find({}).sort({ _id: -1 })
    res.render('home', { pageTitle: 'Home', videosData })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
} // (template, added variable to template)
const search = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req
  let videos = []
  try {
    // options: i => insensitive(대소문자 구분 x)
    videos = await Video.find({ title: { $regex: searchingBy, $options: 'i' } }).sort({ _id: -1 })
  } catch (error) {
    console.log(error)
  }
  res.render('search', { pageTitle: 'Search', searchingBy, videos })
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
    description,
    creator: req.user.id
  })
  await req.user.videos.push(newVideo.id)
  await req.user.save()
  res.redirect(routes.videoDetail(newVideo.id))
}

const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id).populate('creator')
    console.log(video)
    res.render('videoDetail', { pageTitle: video.title, video })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}

const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    if (video.creator.toString() !== req.user.id) {
      throw Error()
    }
    res.render('editVideo', { pageTitle: 'Edit Video', video })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}
const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req
  try {
    await Video.findByIdAndUpdate(id, { title, description })
    res.redirect(routes.videoDetail(id))
  } catch (error) {
    res.redirect(routes.home)
  }
}
const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    if (video.creator.toString() !== req.user.id) {
      throw Error()
    }
    await video.remove()
  } catch (error) {
    console.log(error)
  }
  res.redirect(routes.home)
}

export {
  home,
  search,
  videos,
  getUploadVideo,
  postUploadVideo,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
}
