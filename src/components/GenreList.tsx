import useGameQueryStore from '@/store';
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const {data, isLoading, error} = useGenres();
  const {genreId, setGenreId} = useGameQueryStore((s) => ({
    genreId: s.gameQuery.genreId,
    setGenreId: s.setGenreId,
  }));

  const clearGenreId = () => {
    setGenreId(undefined);
  };

  if (error) return null;

  return (
    <>
      <Heading
        fontSize='2xl'
        marginTop={9}
        marginBottom={3}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        Genres
        {genreId && (
          <Button
            size={'xs'}
            paddingX={'3'}
            backgroundColor={'transparent'}
            onClick={clearGenreId}
          >
            Clear
          </Button>
        )}
      </Heading>
      {isLoading && <Spinner />}
      <List>
        {data?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === genreId ? 'bold' : 'normal'}
                onClick={() => setGenreId(genre.id)}
                fontSize='md'
                variant='link'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
