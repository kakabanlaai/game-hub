import {create} from 'zustand';
import {GameQuery} from './types';

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set((store) => ({gameQuery: {searchText}})),
  setGenreId: (genreId: number) => set((store) => ({gameQuery: {genreId}})),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({gameQuery: {sortOrder}})),
  setPlatformId: (platformId: number) =>
    set((store) => ({gameQuery: {platformId}})),
}));

export default useGameQueryStore;
