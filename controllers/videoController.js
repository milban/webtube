// Global
const home = (req, res) => res.render('home')
const search = (req, res) => res.render('search')

// Video
const videos = (req, res) => res.render('videos')
const uploadVideo = (req, res) => res.render('uploadVideo')
const videoDetail = (req, res) => res.render('videoDetail')
const editVideo = (req, res) => res.render('editVideo')
const deleteVideo = (req, res) => res.render('deleteVideo')

export {
  home,
  search,
  videos,
  uploadVideo,
  videoDetail,
  editVideo,
  deleteVideo
}
