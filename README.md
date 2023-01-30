# webrtc-video-to-pc
Demo on how to stream a video element to RTCPeerConnection.

Example is based on this example https://github.com/webrtc/samples/tree/gh-pages/src/content/capture/video-pc

Purpose of this repo is to answer this question on StackOverflow https://stackoverflow.com/questions/66788422/video-capturestream-stops-when-video-is-over

The question is how to continue streaming a video that ended to the other user.

1. you can loop your video (add loop in the 'leftVideo' in the index.html - the code is commented out; just uncomment it to test it)
2. add a 'play' listener to the video and replace video track in the peer connection (this one is already added in the main.js)

How to try the example:

    $ npm install
    $ npm run start

Go to http://localhost:8000 to try it out