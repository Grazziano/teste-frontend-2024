const apiKey = 'AIzaSyDWNNo1T7U7mJw4EpptVkDMncJRi4V-klg';
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function searchVideos() {
  const query = document.getElementById('search-input').value;
  fetch(`http://localhost:3000/search/${query}`)
    .then((response) => response.json())
    .then((data) => {
      displayVideos(data.items);
    });
}

function displayVideos(videos) {
  const container = document.getElementById('videos-container');
  container.innerHTML = '';
  videos.forEach((video) => {
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');
    videoItem.innerHTML = `
          <h3>${video.snippet.title}</h3>
          <iframe src="https://www.youtube.com/embed/${
            video.id.videoId
          }" frameborder="0"></iframe>
          <button onclick="toggleFavorite('${video.id.videoId}')">
              <span class="${
                favorites.includes(video.id.videoId) ? 'favorite' : ''
              }">★</span>
          </button>
      `;
    container.appendChild(videoItem);
  });
}
