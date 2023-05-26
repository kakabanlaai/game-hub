import APIClient, {FetchResponse} from '@/services/api-client';
import {Genre} from '@/types';
import {useQuery} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    // initialData: {count: genres.length, results: genres},
  });

export default useGenres;
