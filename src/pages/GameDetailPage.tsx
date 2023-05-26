import useGame from '@/hooks/useGame';
import {Box, Heading, Spinner, Text} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';

const GameDetailPage = () => {
  const {slug} = useParams();
  const {data: game, isLoading, error} = useGame(slug!);

  if (isLoading)
    return (
      <Box padding={5}>
        <Spinner />
      </Box>
    );

  if (error || !game) throw error;

  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <Text>{game.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
