import React, { useState } from 'react';
import { MemoryMaster } from './MemoryMaster';

export const Game = (props) => {
  const [coins, setCoins] = useState(0);

  return (
    <>
      <MemoryMaster coins={coins} />
    </>
  );
};
