'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, CheckCircle2, Shield, Eye } from 'lucide-react';

export default function VideoShowcase() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <section className="video-showcase-section" id="video-demo">
      <div className="container">
        
        {/* Section Header with Targeted SEO Keywords */}
        <div className="section-head text-center">
          <div className="pill-badge" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
            <span className="pill-dot"></span>
            <span>OFFICIAL AI WORKOUT TELEMETRY DEMO</span>
          </div>
          
          <h2 className="section-title">
            See TrueRep AI Vision in Action.
          </h2>
          
          <p className="section-subtitle" style={{ maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            Watch our 33-point on-device pose estimation engine evaluate squat depth, track deterministic rep cadence, and deliver instant voice coaching in real time.
          </p>
        </div>

        {/* Video Player Cinema Frame */}
        <div className="video-cinema-container">
          <div className="video-ambient-glow"></div>
          
          <div className="video-wrapper">
            <video
              ref={videoRef}
              src="/assets/brag.mp4"
              poster="/assets/brag.jpg"
              playsInline
              muted={isMuted}
              loop
              preload="metadata"
              className="showcase-video-element"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Overlay Custom Controls */}
            <div className="video-controls-overlay">
              <button 
                type="button"
                onClick={togglePlay}
                className="video-action-btn primary-play-btn"
                aria-label={isPlaying ? "Pause video" : "Play demo video"}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} style={{ marginLeft: '3px' }} />}
              </button>

              <div className="video-bottom-bar">
                <div className="video-status-indicator">
                  <span className="live-pulse-dot"></span>
                  <span className="video-status-text">
                    {isPlaying ? 'PLAYING TELEMETRY DEMO' : 'CLICK TO PLAY AI DEMO'}
                  </span>
                </div>

                <div className="video-mini-actions">
                  <button 
                    type="button"
                    onClick={toggleMute} 
                    className="video-icon-btn" 
                    title={isMuted ? "Unmute sound" : "Mute sound"}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button 
                    type="button"
                    onClick={handleFullscreen} 
                    className="video-icon-btn" 
                    title="Fullscreen"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Feature Highlights Grid under the Video */}
        <div className="video-features-row">
          <div className="video-feature-pill">
            <Sparkles size={16} color="var(--primary)" />
            <span><strong>33 3D Pose Landmarks</strong> · Sub-millimeter tracking</span>
          </div>
          <div className="video-feature-pill">
            <Shield size={16} color="var(--accent-lime)" />
            <span><strong>100% Private</strong> · Zero cloud video uploads</span>
          </div>
          <div className="video-feature-pill">
            <CheckCircle2 size={16} color="var(--primary)" />
            <span><strong>Deterministic Reps</strong> · Strict angle verification</span>
          </div>
          <div className="video-feature-pill">
            <Eye size={16} color="#A855F7" />
            <span><strong>Real-Time Audio Cues</strong> · Instant depth callouts</span>
          </div>
        </div>

      </div>
    </section>
  );
}
