import React from "react";

function CameraPlayer({ cameraOptions, selectedCamera, onCameraChange, canvasRef }) {
  return (
    <div className="video">
      <canvas ref={canvasRef} width="960" height="675"
        className={`video__media_${selectedCamera.replace(/^Camera\s*/, "")}`}
      />
      <select value={selectedCamera} onChange={(e) => onCameraChange(e.target.value)} className='absolution'>
        {cameraOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CameraPlayer;