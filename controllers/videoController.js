// Global
const home = (req, res) => res.send('home')
const search = (req, res) => res.send('search')

// Video
const videos = (req, res) => res.send('videos')
const uploadVideo = (req, res) => res.send('uploadVideo')
const videoDetail = (req, res) => res.send('videoDetail')
const editVideo = (req, res) => res.send('editVideo')
const deleteVideo = (req, res) => res.send('deleteVideo')

export {
  home,
  search,
  videos,
  uploadVideo,
  videoDetail,
  editVideo,
  deleteVideo
}
