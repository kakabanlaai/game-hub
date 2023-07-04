import APIClient from '@/services/api-client';
import {Trailer} from '@/types';
import {useQuery} from '@tanstack/react-query';

const useTrailer = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({queryKey: ['trailers', gameId], queryFn: apiClient.getAll});
};

export default useTrailer;
