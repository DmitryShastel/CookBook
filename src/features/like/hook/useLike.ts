import { useState } from 'react';

export const useLike = (initialLiked = false, likesCount: number) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likeCount, setLikesCount] = useState(likesCount);

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
    } else {
      setLikesCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return {
    liked,
    likeCount,
    handleLike,
  };
};
