import React, { useState, useRef, useEffect } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

interface BackgroundMusicProp {
  src: string;
}

const BackgroundMusic: React.FC<BackgroundMusicProp> = ({ src }) => {
  const [isMuted, setIsMuted] = useState(true);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(error => {
        console.warn("Background music autoplay was prevented: ", error);
      });
    }
  }, []);

  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  };

  return (
    <div>
      <audio ref={audioRef} src={src} loop autoPlay muted/>
      <button
        onClick={toggleMute}
        className="
          fixed bottom-10 left-5 z-50
          flex h-10 w-10 items-center justify-center
          rounded-full border border-earth-green
          bg-warm-yellow text-lg text-burnt-red
          shadow-md transition-all duration-200
          ease-in-out hover:scale-110 hover:bg-yellow-500
        "
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </div>
  );
};

export default BackgroundMusic;