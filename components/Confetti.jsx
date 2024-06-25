'use client';
import ReactConfetti from 'react-confetti';
import { useSelector } from 'react-redux';
import { useWindowSize } from 'react-use';

export const Confetti = () => {
  const { liked, likedOnSession } = useSelector((state) => state.likes);
  const { width, height } = useWindowSize();

  return (
    <div className="confetti fixed w-full h-full pointer-events-none">
      {likedOnSession && liked && (
        <ReactConfetti
          colors={['#FFF7D6', '#00B2FF']}
          recycle={false}
          height={height}
          width={width - 20}
        />
      )}
    </div>
  );
};
