import {create} from 'zustand';
import {GameQuery} from './types';

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number | undefined) => void;
  setPlatformId: (platformId: number | undefined) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set((store) => ({gameQuery: {searchText}})),
  setGenreId: (genreId) => set((store) => ({gameQuery: {genreId}})),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({gameQuery: {sortOrder}})),
  setPlatformId: (platformId) => set((store) => ({gameQuery: {platformId}})),
}));

export default useGameQueryStore;
