import React, { useEffect, useState } from 'react';

const useRenderCompleted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  });

  return mounted;
};

export default useRenderCompleted;
