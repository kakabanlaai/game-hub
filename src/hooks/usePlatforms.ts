import APIClient, {FetchResponse} from '@/services/api-client';
import {Platform} from '@/types';
import {useQuery} from '@tanstack/react-query';
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
  });

export default usePlatforms;
