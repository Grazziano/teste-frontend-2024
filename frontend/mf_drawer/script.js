function navigateTo(page) {
  const container = document.getElementById('micro-frontend-container');
  if (page === 'videos') {
    container.innerHTML = `<iframe src="../mf_videos/index.html"></iframe>`;
  } else if (page === 'favorites') {
    container.innerHTML = `<iframe src="../mf_videos/index.html?favorites=true"></iframe>`;
  }
}
