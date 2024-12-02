// Get elements
const videoContainer = document.getElementById("video-container");
const videoThumbnail = document.getElementById("video-thumbnail");
const videoFrame = document.getElementById("video-frame");
const playButton = document.getElementById("play-button");

// Replace the thumbnail with the iframe when clicked
playButton.addEventListener("click", function () {
  videoThumbnail.style.display = "none"; // Hide the thumbnail
  videoFrame.style.display = "block"; // Show the iframe
  videoFrame.src = "https://www.youtube.com/embed/your-video-id?autoplay=1"; // Set video source with autoplay
});
