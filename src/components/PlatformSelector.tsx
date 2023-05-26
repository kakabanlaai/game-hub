import usePlatform from '@/hooks/usePlatform';
import useGameQueryStore from '@/store';
import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
  const {data, error} = usePlatforms();
  const {platformId, setPlatformId} = useGameQueryStore((s) => ({
    platformId: s.gameQuery.platformId,
    setPlatformId: s.setPlatformId,
  }));
  const selectedPlatform = usePlatform(platformId);

  if (error) return null;

  return (
    <Menu preventOverflow={false}>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
