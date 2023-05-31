import Hls from "hls.js"
import React, { useEffect, useRef, useState } from "react"
import CameraPlayer from "../cameraPlayer/cameraPlayer.js"

function MeetingPage() {
  const [camera1, setCamera1] = useState("Camera 1")
  const [camera2, setCamera2] = useState("Camera 2")
  const [camera3, setCamera3] = useState("Camera 3")

  const cameraOptions = [
    "Camera 1",
    "Camera 2",
    "Camera 3",
    "Camera 4",
    "Camera 5",
    "Camera 6",
    "Camera 7",
    "Camera 8",
    "Camera 9",
  ]

  const videoRef = useRef()
  const canvasRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef()
  ])

  useEffect(() => {
    if (Hls.isSupported()) {
      const videoSrc = "https://s162.lab.sgigs.com/HLS/playlist.m3u8"
      const hls = new Hls()

      hls.loadSource(videoSrc)
      hls.attachMedia(videoRef.current)
      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(videoSrc)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current.play()
        })
      })


      const drawVideo = () => {
        if (
          canvasRefs.current[0].current &&
          canvasRefs.current[1].current &&
          canvasRefs.current[2].current
        ) {
          const ctx1 = canvasRefs.current[0].current.getContext("2d")
          const ctx2 = canvasRefs.current[1].current.getContext("2d")
          const ctx3 = canvasRefs.current[2].current.getContext("2d")

          ctx1.drawImage(videoRef.current, 0, 0, 960, 675)
          ctx2.drawImage(videoRef.current, 0, 0, 960, 675)
          ctx3.drawImage(videoRef.current, 0, 0, 960, 675)
        }
        requestAnimationFrame(drawVideo)
      }

      requestAnimationFrame(drawVideo)
    }
  }, [])

  return (
    <div className="intro">
      <video ref={videoRef} width="960" height="675" autoPlay muted style={{
        position: "absolute", top: "-2000px"
      }} />
      <CameraPlayer
        cameraOptions={cameraOptions}
        selectedCamera={camera1}
        onCameraChange={setCamera1}
        canvasRef={canvasRefs.current[0]}
      />
      <CameraPlayer
        cameraOptions={cameraOptions}
        selectedCamera={camera2}
        onCameraChange={setCamera2}
        canvasRef={canvasRefs.current[1]}
      />
      <CameraPlayer
        cameraOptions={cameraOptions}
        selectedCamera={camera3}
        onCameraChange={setCamera3}
        canvasRef={canvasRefs.current[2]}
      />
    </div>
  )
}

export default MeetingPage
