import React, { useState } from 'react';
import { MemoryMaster } from './MemoryMaster';
import PairAGone from './PairAGone';

export const Game = (props) => {
  const [coins, setCoins] = useState(0);

  return (
    <>
      <MemoryMaster coins={coins} />
      <PairAGone />
    </>
  );
};
