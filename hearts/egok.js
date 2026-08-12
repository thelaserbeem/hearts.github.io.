
document.addEventListener('DOMContentLoaded', () => {
  const bgVideo = document.querySelector('.video-background');
  if (!bgVideo) return;

  bgVideo.muted = false;
  bgVideo.autoplay = true;
  bgVideo.loop = true;
  bgVideo.playsInline = true;

  const startVideo = () => {
    bgVideo.play().catch(() => {
      document.body.addEventListener('click', startVideo, { once: true });
    });
  };

  startVideo();
});

