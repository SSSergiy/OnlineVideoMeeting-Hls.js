import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

const HlsVideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const hls = new Hls();
    hls.loadSource(videoSource);
    hls.attachMedia(videoRef.current);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      videoRef.current.play();
    });

    return () => {
      hls.destroy();
    };
  }, [videoSource]);

  return <video ref={videoRef} />;
};

export default HlsVideoPlayer;