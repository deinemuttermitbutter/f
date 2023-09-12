function playVideo() {
    const videoUrl = document.getElementById("videoUrl").value;
    if (videoUrl) {
        // Encode the video URL to pass it as a query parameter
        const encodedVideoUrl = encodeURIComponent(videoUrl);
        // Redirect to the playback page with the encoded URL
        window.location.href = `play.html?url=${encodedVideoUrl}`;
    } else {
        alert("Please enter an M3U8 video URL.");
    }
}
