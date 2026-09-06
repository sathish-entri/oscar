import React, { useState, useEffect, useRef } from 'react';

export default function LogoIntro({ targetRef, onComplete }) {
  const [phase, setPhase] = useState('center'); // 'center' | 'moving' | 'done'
  const [style, setStyle] = useState({
    top: '50vh',
    left: '50vw',
    width: '540px',
    maxWidth: '88vw',
    height: 'auto',
    transform: 'translate(-50%, -50%)',
  });

  const finishCalledRef = useRef(false);

  const handleFinish = () => {
    if (finishCalledRef.current) return;
    finishCalledRef.current = true;
    setPhase('done');
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Hold 3.0 seconds (3000ms) in center at very big size
    const timer1 = setTimeout(() => {
      let targetX = '120px';
      let targetY = '40px';
      let targetWidth = '220px';

      if (targetRef && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        targetX = `${rect.left + rect.width / 2}px`;
        targetY = `${rect.top + rect.height / 2}px`;
        targetWidth = `${rect.width}px`;
      }

      setPhase('moving');
      setStyle({
        top: targetY,
        left: targetX,
        width: targetWidth,
        maxWidth: targetWidth,
        height: 'auto',
        transform: 'translate(-50%, -50%)',
      });
    }, 2000);

    // Backup safety timer at 4600ms (2000ms hold + 2400ms motion + 200ms buffer)
    const timer2 = setTimeout(() => {
      handleFinish();
    }, 4600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [targetRef]);

  if (phase === 'done') return null;

  return (
    <div className={`logo-splash-backdrop ${phase === 'moving' ? 'fade-out' : ''}`}>
      <div
        className={`logo-splash-flying ${phase === 'moving' ? 'is-moving' : 'is-center'}`}
        style={style}
        onTransitionEnd={(e) => {
          if (e.propertyName === 'top' || e.propertyName === 'left' || e.propertyName === 'width') {
            handleFinish();
          }
        }}
      >
        <img
          src="./logo.png"
          alt="OSCAR AUTO FLUX"
          className="splash-logo-img"
        />
      </div>
    </div>
  );
}
