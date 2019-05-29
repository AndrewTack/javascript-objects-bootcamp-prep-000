var playlist = {
  beatles : blackbird,
  queen : bohemian, 
  billy : pianoman,
  elton : rocketman,
}

function updatePlaylist (playlist, artist, title) {
  playlist[artist] = title
  
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist.artist
  
  return playlist
}