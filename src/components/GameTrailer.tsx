import useTrailer from '@/hooks/useTrailer';
import {Text} from '@chakra-ui/react';
import React from 'react';

type props = {
  gameId: number;
};

const GameTrailer = ({gameId}: props) => {
  const {data, error, isLoading} = useTrailer(gameId);
  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : (
    <Text>The game has no video trailer yet</Text>
  );
};

export default GameTrailer;
