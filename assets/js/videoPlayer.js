const videoContainer = document.querySelector("#jsVideoPlayer")
const videoPlayer = videoContainer.querySelector("video")
const playBtn = document.querySelector("#jsPlayButton")
const volumeBtn = document.querySelector("#jsVolumeBtn")
const fullScreenBtn = document.querySelector("#jsFullScreen")
const currentTime = document.querySelector("#jsCurrentTime")
const totalTime = document.querySelector("#jsTotalTime")

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play()
    playBtn.innerHTML = '<i class="far fa-pause-circle"></i>'
  } else {
    videoPlayer.pause()
    playBtn.innerHTML = '<i class="fas fa-play"></i>'
  }
}

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false
    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
  } else {
    videoPlayer.muted = true
    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'
  }
}

function exitFullScreen() {
  fullScreenBtn.innerHTML = '<i class="fas fa-expand"></i>'
  fullScreenBtn.addEventListener("click", goFullScreen)
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}

function goFullScreen() {
  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen()
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen()
  } else if (videoContainer.webkitRequestFullscreen) {
    videoContainer.webkitRequestFullscreen()
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen()
  }
  fullScreenBtn.innerHTML = '<i class="fas fa-compress"></i>'
  fullScreenBtn.removeEventListener("click", goFullScreen)
  fullScreenBtn.addEventListener("click", exitFullScreen)
}

const formatDate = seconds => {
  const secondsNumber = parseInt(seconds, 10)
  let hours = Math.floor(secondsNumber / 3600)
  let minutes = Math.floor((secondsNumber - hours * 3600) / 60)
  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (seconds < 10) {
    totalSeconds = `0${totalSeconds}`
  }
  return `${hours}:${minutes}:${totalSeconds}`
}

function getCurrentTime() {
  currentTime.innerHTML = formatDate(videoPlayer.currentTime)
}

function setTotalTime() {
  const totalTimeString = formatDate(videoPlayer.duration)
  totalTime.innerHTML = totalTimeString
  setInterval(getCurrentTime, 1000)
}

function init() {
  playBtn.addEventListener("click", handlePlayClick)
  volumeBtn.addEventListener("click", handleVolumeClick)
  fullScreenBtn.addEventListener("click", goFullScreen)
  videoPlayer.addEventListener("loadedmetadata", setTotalTime)
}

if (videoContainer) {
  init()
}
